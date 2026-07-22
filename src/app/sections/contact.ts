import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../shared/reveal';

interface Star {
  readonly x: string;
  readonly y: string;
  readonly size: string;
  readonly dur: string;
  readonly delay: string;
}

/** Deterministic PRNG, so the sky is identical on every render — including the
 *  prerender pass, which would otherwise hydrate into a different set of stars. */
function seeded(seed: number): () => number {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function buildStars(count: number): Star[] {
  const rnd = seeded(42);
  return Array.from({ length: count }, () => ({
    // Draw order matters — it's what makes the sky reproducible.
    x: (rnd() * 96 + 2).toFixed(1) + '%',
    y: (rnd() * 78 + 4).toFixed(1) + '%',
    size: (rnd() * 2.4 + 1.4).toFixed(1) + 'px',
    dur: (rnd() * 3 + 2.5).toFixed(1) + 's',
    delay: (rnd() * 4).toFixed(1) + 's',
  }));
}

@Component({
  selector: 'am-contact',
  imports: [Reveal, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly stars = buildStars(34);
}
