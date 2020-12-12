import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductsComponent } from './component/products/products.component'


export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '',
    component: ProductsComponent,
    children: [
        {
      path: '',
      loadChildren: './component/component.module#ComponentModule'
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
