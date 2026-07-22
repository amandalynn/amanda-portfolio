import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaviconSparkle } from './shared/favicon-sparkle';

@Component({
  selector: 'am-root',
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<router-outlet />',
})
export class App {
  private readonly favicon = inject(FaviconSparkle);

  constructor() {
    // Browser only — afterNextRender never fires during prerendering.
    afterNextRender(() => this.favicon.start());
  }
}
