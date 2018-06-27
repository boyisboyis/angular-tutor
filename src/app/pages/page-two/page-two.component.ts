import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  constructor(
    private _ap: AppService
  ) { }

  ngOnInit() {
  }

  public increase() {
    this._ap.increase();
  }

}
