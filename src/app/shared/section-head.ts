import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Section title + handwritten aside, with the watercolor wash behind it. */
@Component({
  selector: 'am-section-head',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="wash" [class]="'wash--' + tone()" [style.width.px]="washWidth()"></span>
    <h2>{{ heading() }}</h2>
    <span class="aside">{{ aside() }}</span>
  `,
  styleUrl: './section-head.scss',
})
export class SectionHead {
  readonly heading = input.required<string>();
  readonly aside = input.required<string>();
  readonly tone = input<'sage' | 'clay' | 'blue'>('sage');
  readonly washWidth = input(150);
}
