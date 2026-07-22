import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AfterHours } from '../../sections/after-hours';
import { Contact } from '../../sections/contact';
import { Hero } from '../../sections/hero';
import { RoadSoFar } from '../../sections/road-so-far';
import { SelectedWork } from '../../sections/selected-work';
import { SiteNav } from '../../sections/site-nav';
import { Toolbox } from '../../sections/toolbox';

@Component({
  selector: 'am-portfolio',
  imports: [SiteNav, Hero, SelectedWork, Toolbox, RoadSoFar, AfterHours, Contact],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <am-site-nav />
    <am-hero />
    <am-selected-work />
    <am-toolbox />
    <am-road-so-far />
    <am-after-hours />
    <am-contact />
  `,
})
export class Portfolio {}
