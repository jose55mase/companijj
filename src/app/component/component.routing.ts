import { Routes,RouterModule } from '@angular/router';
import { ProductAddComponent } from './products/product-add/product-add.component';

import { ProductsComponent } from './products/products.component';

export const ComponentRouting: Routes = [
    { path: 'component/products',      component: ProductsComponent },
    { path: 'component/product/add',   component:ProductAddComponent }

];
