import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PageOneComponent],
  declarations: [PageOneComponent]
})
export class PageOneModule { }
