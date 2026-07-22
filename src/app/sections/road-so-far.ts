import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ROLES } from '../data/content';
import { Reveal } from '../shared/reveal';
import { SectionHead } from '../shared/section-head';

@Component({
  selector: 'am-road-so-far',
  imports: [Reveal, SectionHead],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './road-so-far.html',
  styleUrl: './road-so-far.scss',
})
export class RoadSoFar {
  protected readonly roles = ROLES;
}
