import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  constructor(
    private _ap: AppService
  ) { }

  ngOnInit() {
  }

  public decrease() {
    this._ap.decrease();
  }

}
