import { Component, OnInit } from '@angular/core';

import { LoginService } from './../service/login_service/login.service'
import { ROUTESNABAR } from './../startApp';

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
/*
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',
      title: 'Inicio',
      icon:'nc-bank',
      class: ''
    },
    { path: '/products',
      title: 'Productos',
      icon:'nc-diamond',
      class: ''
    },
    { path: '/maps',          title: 'Mapa',              icon:'nc-pin-3',      class: '' },
//    { path: '/products/add',  title: 'Productos',         icon:'nc-pin-3',      class: '' },

//    { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },

];
*/

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    constructor(private loginService$:LoginService){
      this.loadComponets();
    }
    ngOnInit() {
        //this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.loginService$.components.emit(ROUTESNABAR)
        this.loginService$.components.subscribe(
          (responses:any) => {
            this.menuItems = responses
          }
        )
    }

    loadComponets(){
      this.loginService$.components.subscribe(
        (responses) => {
          this.menuItems = responses.filter(menuItem => menuItem);
        }
      )
    }
}
