import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
const routers: Routes = [
  {
    path: '',
    redirectTo: 'page-one',
    pathMatch: 'full'
  },
  {
    path: 'page-one',
    component: PageOneComponent
  },
  {
    path: 'page-two',
    // loadChildren: 'src/app/pages/page-two/page-two.module#PageTwoModule'
    component: PageTwoComponent
  },
  {
    path: '**',
    redirectTo: 'page-one'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routers);
