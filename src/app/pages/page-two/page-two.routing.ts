import { Routes, RouterModule } from '@angular/router';
import { PageTwoComponent } from './page-two.component';
import { ModuleWithProviders } from '@angular/core';

const routers: Routes = [
  {
    path: '',
    component: PageTwoComponent
  }
];

export const rouring: ModuleWithProviders = RouterModule.forChild(routers);