import { Component } from '@angular/core';
import { GlobalConstants } from './common/global-constants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  componetLabels =GlobalConstants;
  title = this.componetLabels.siteTitle
}
