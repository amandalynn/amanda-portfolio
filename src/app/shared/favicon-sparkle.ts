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

    // A brief glint in the upper-right dead corner — the star's points reach the
    // edge at N/S/E/W, so the diagonals stay clear and it never merges with the
    // mark. Favicon-scale echo of the shooting star.
    if (t < 0.18) {
      const p = t / 0.18;
      const fade = Math.sin(p * Math.PI);
      ctx.save();
      ctx.globalAlpha = fade * 0.85;
      ctx.fillStyle = CREAM;
      ctx.beginPath();
      ctx.arc(23 + p * 4, 9 - p * 3, 1.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    this.link.href = this.canvas.toDataURL('image/png');
  }
}
