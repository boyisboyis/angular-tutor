import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTwoComponent } from './page-two.component';
// import { rouring } from './page-two.routing';

@NgModule({
  imports: [
    CommonModule,
    // rouring
  ],
  exports: [PageTwoComponent],
  declarations: [PageTwoComponent]
})
export class PageTwoModule { }
