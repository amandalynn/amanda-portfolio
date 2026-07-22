import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HOBBIES } from '../data/content';
import { PhotoSlot } from '../shared/photo-slot';
import { Reveal } from '../shared/reveal';
import { SectionHead } from '../shared/section-head';

@Component({
  selector: 'am-after-hours',
  imports: [PhotoSlot, Reveal, SectionHead],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './after-hours.html',
  styleUrl: './after-hours.scss',
})
export class AfterHours {
  protected readonly hobbies = HOBBIES;
}
