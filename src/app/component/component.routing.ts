import { Routes,RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';

export const ComponentRouting: Routes = [
    { path: 'component/products',      component: ProductsComponent },
];
