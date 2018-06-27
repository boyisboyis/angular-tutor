import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  get count() {
    return this._ap.count$;
  }
  constructor(
    private _ap: AppService
  ) {}
}
