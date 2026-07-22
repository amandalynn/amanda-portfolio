import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WORK } from '../data/content';
import { Reveal } from '../shared/reveal';
import { SectionHead } from '../shared/section-head';

@Component({
  selector: 'am-selected-work',
  imports: [Reveal, SectionHead],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './selected-work.html',
  styleUrl: './selected-work.scss',
})
export class SelectedWork {
  protected readonly cards = WORK;
}
