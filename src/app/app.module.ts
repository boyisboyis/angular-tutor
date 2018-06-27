import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { PageOneModule } from './pages/page-one/page-one.module';
import { PageTwoModule } from './pages/page-two/page-two.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    PageOneModule,
    PageTwoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
