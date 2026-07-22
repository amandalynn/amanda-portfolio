import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TOOLBOX } from '../data/content';
import { Reveal } from '../shared/reveal';
import { SectionHead } from '../shared/section-head';

@Component({
  selector: 'am-toolbox',
  imports: [Reveal, SectionHead],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toolbox.html',
  styleUrl: './toolbox.scss',
})
export class Toolbox {
  protected readonly columns = TOOLBOX;
}
