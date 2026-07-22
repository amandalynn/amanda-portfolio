import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

/**
 * A user-supplied photo. Until the real file lands in `public/images/`, the slot
 * falls back to the sketch placeholder instead of a broken-image icon.
 *
 * The intrinsic size is published as `--slot-w` / `--slot-h` so callers can
 * restyle the slot responsively (see hero.scss and after-hours.scss).
 */
@Component({
  selector: 'am-photo-slot',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img
      [src]="src()"
      [alt]="alt()"
      [width]="width()"
      [height]="height()"
      (error)="missing.set(true)"
    />
    @if (missing()) {
      <span class="hint">{{ placeholder() }}</span>
    }
  `,
  host: {
    '[class.is-empty]': 'missing()',
    '[style.--slot-w.px]': 'width()',
    '[style.--slot-h.px]': 'height()',
  },
  styleUrl: './photo-slot.scss',
})
export class PhotoSlot {
  readonly src = input.required<string>();
  readonly alt = input.required<string>();
  readonly placeholder = input.required<string>();
  readonly width = input.required<number>();
  readonly height = input.required<number>();

  protected readonly missing = signal(false);
}
