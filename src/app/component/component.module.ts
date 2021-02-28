import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { ComponentRouting } from './component.routing';
import { ProductListComponent } from './products/product-list/product-list.component'
import { MaterialModule } from 'app/angularMaterial/angular-material.module';
import { Page404Component } from './page404/page404.component';
import { BuyComponent } from './buy/buy.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ProductsComponent, ProductListComponent, Page404Component, BuyComponent, LoginComponent],
  imports: [
    RouterModule.forChild(ComponentRouting)
    ,CommonModule
    ,MaterialModule
  ]
})
export class ComponentModule { }
