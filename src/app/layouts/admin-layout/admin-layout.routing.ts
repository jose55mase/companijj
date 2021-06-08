import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { ProductsComponent } from 'app/component/products/products.component';
import { Page404Component } from 'app/component/page404/page404.component';
import { BuyComponent } from 'app/component/buy/buy.component';
import { ProductAddComponent } from 'app/component/products/product-add/product-add.component';
import { OurserviceComponent } from 'app/pages/ourservice/ourservice.component';
import { SearchComponent } from 'app/pages/search/search.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },

    { path: 'products',       component: ProductsComponent},
    { path: 'maintenance',    component:Page404Component},
    { path: 'buy',            component:BuyComponent },
    { path: 'products/add',   component:ProductAddComponent },
    { path: 'ourservices',     component:OurserviceComponent },
    { path: 'products/search',     component:SearchComponent },

];
