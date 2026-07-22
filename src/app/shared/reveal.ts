import { Directive, ElementRef, afterNextRender, inject } from '@angular/core';

/**
 * Fades + lifts an element into view the first time it intersects the viewport.
 *
 * The hidden resting state lives in styles.scss (gated on `.js`) so prerendered
 * HTML stays readable without scripting. `afterNextRender` keeps the observer
 * out of the prerender pass entirely.
 */
@Directive({
  selector: '[amReveal]',
  host: { class: 'reveal' },
})
export class Reveal {
  private readonly host = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      const el = this.host.nativeElement as HTMLElement;
      const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced || !('IntersectionObserver' in window)) {
        el.classList.add('is-revealed');
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      );

      observer.observe(el);
    });
  }
}
