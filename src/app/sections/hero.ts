import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PhotoSlot } from '../shared/photo-slot';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'am-hero',
  imports: [PhotoSlot, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
