import { DOCUMENT, Injectable, inject } from '@angular/core';

/** Star path, authored on a 64×64 viewBox — same mark as the static favicon. */
const STAR =
  'M32 6 C33.6 22 42 30.4 58 32 C42 33.6 33.6 42 32 58 C30.4 42 22 33.6 6 32 C22 30.4 30.4 22 32 6 Z';

const SIZE = 32;
const CLAY = '#a25c3c';
const CREAM = '#f7f3ea';

/** ~12fps. A favicon never needs more, and it keeps the loop close to free. */
const FRAME_MS = 80;
const CYCLE_MS = 4200;

/**
 * Glints that pop in the diagonal corners. The star's points reach the edge at
 * N/S/E/W, so the diagonals stay clear and these never merge with the mark.
 * Staggered `start` values keep something twinkling most of the cycle.
 */
const GLINTS: readonly { x: number; y: number; r: number; start: number; dur: number }[] = [
  { x: 24, y: 8, r: 1.4, start: 0.0, dur: 0.22 },
  { x: 7, y: 7, r: 1.0, start: 0.18, dur: 0.2 },
  { x: 25, y: 25, r: 1.2, start: 0.42, dur: 0.22 },
  { x: 8, y: 24, r: 0.9, start: 0.62, dur: 0.18 },
  { x: 16, y: 5, r: 0.8, start: 0.8, dur: 0.16 },
];

/**
 * Gently twinkles the favicon: the star breathes, and a small glint crosses it
 * once per cycle. Mirrors the contact section's starfield.
 *
 * Honours `prefers-reduced-motion` and stops while the tab is hidden, so a
 * backgrounded tab costs nothing. Falls back to the static .ico if anything
 * here is unavailable — Safari ignores canvas favicons entirely.
 */
@Injectable({ providedIn: 'root' })
export class FaviconSparkle {
  private readonly doc = inject(DOCUMENT);
  private timer: number | null = null;
  private started = 0;
  private canvas?: HTMLCanvasElement;
  private ctx?: CanvasRenderingContext2D | null;
  private link?: HTMLLinkElement;
  private staticHref = '';

  start(): void {
    const win = this.doc.defaultView;
    if (!win || win.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.link = this.doc.querySelector<HTMLLinkElement>('link[rel="icon"]') ?? undefined;
    if (!this.link) return;
    this.staticHref = this.link.href;

    this.canvas = this.doc.createElement('canvas');
    this.canvas.width = this.canvas.height = SIZE;
    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) return;

    this.started = win.performance.now();
    this.doc.addEventListener('visibilitychange', this.onVisibility);
    this.resume();
  }

  private readonly onVisibility = (): void => {
    if (this.doc.hidden) {
      this.pause();
      // Leave the crisp static icon in place while backgrounded.
      if (this.link) this.link.href = this.staticHref;
    } else {
      this.resume();
    }
  };

  private resume(): void {
    if (this.timer !== null || this.doc.hidden) return;
    const win = this.doc.defaultView;
    if (!win) return;
    this.timer = win.setInterval(() => this.draw(win.performance.now()), FRAME_MS);
  }

  private pause(): void {
    if (this.timer === null) return;
    this.doc.defaultView?.clearInterval(this.timer);
    this.timer = null;
  }

  private draw(now: number): void {
    const ctx = this.ctx;
    if (!ctx || !this.canvas || !this.link) return;

    const t = ((now - this.started) % CYCLE_MS) / CYCLE_MS; // 0..1
    // Slow breath: brightness and scale rise and fall together.
    const breath = 0.5 - 0.5 * Math.cos(t * Math.PI * 2);
    const scale = 0.78 + breath * 0.1;
    const alpha = 0.82 + breath * 0.18;

    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.fillStyle = CLAY;
    ctx.fillRect(0, 0, SIZE, SIZE);

    ctx.save();
    ctx.translate(SIZE / 2, SIZE / 2);
    ctx.scale((SIZE / 64) * scale, (SIZE / 64) * scale);
    ctx.translate(-32, -32);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = CREAM;
    ctx.fill(new Path2D(STAR));
    ctx.restore();

    // Corner glints, each a four-point spark that swells and fades.
    ctx.save();
    ctx.fillStyle = CREAM;
    for (const g of GLINTS) {
      // wrap so a glint straddling the end of the cycle still completes
      const local = (t - g.start + 1) % 1;
      if (local > g.dur) continue;
      const p = local / g.dur;
      const fade = Math.sin(p * Math.PI);
      ctx.globalAlpha = fade * 0.95;
      this.spark(ctx, g.x, g.y, g.r * (0.5 + fade * 0.9));
    }
    ctx.restore();

    this.link.href = this.canvas.toDataURL('image/png');
  }

  /** A tiny four-point spark — the star mark in miniature. */
  private spark(ctx: CanvasRenderingContext2D, x: number, y: number, r: number): void {
    const waist = r * 0.28;
    ctx.beginPath();
    ctx.moveTo(x, y - r);
    ctx.quadraticCurveTo(x + waist, y - waist, x + r, y);
    ctx.quadraticCurveTo(x + waist, y + waist, x, y + r);
    ctx.quadraticCurveTo(x - waist, y + waist, x - r, y);
    ctx.quadraticCurveTo(x - waist, y - waist, x, y - r);
    ctx.closePath();
    ctx.fill();
  }
}
