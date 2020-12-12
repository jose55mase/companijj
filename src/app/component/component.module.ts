import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { ComponentRouting } from './component.routing';
import { ProductListComponent } from './products/product-list/product-list.component'
import { MaterialModule } from 'app/angularMaterial/angular-material.module';

@NgModule({
  declarations: [ProductsComponent, ProductListComponent],
  imports: [
    RouterModule.forChild(ComponentRouting)
    ,CommonModule
    ,MaterialModule
  ]
})
export class ComponentModule { }
