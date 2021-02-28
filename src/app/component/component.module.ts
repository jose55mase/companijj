import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { ComponentRouting } from './component.routing';
import { ProductListComponent } from './products/product-list/product-list.component'
import { MaterialModule } from 'app/angularMaterial/angular-material.module';
import { Page404Component } from './page404/page404.component';
import { BuyComponent } from './buy/buy.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, ProductListComponent, Page404Component, BuyComponent, ProductAddComponent],
  imports: [
    RouterModule.forChild(ComponentRouting)
    ,CommonModule,MaterialModule
    ,ReactiveFormsModule,FormsModule
  ]
})
export class ComponentModule { }
