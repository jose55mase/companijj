
export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTESNABAR: RouteInfo[] = [
    { path: '/dashboard', title: 'Inicio', icon:'nc-bank',  class: '' },
    { path: '/products', title: 'Productos', icon:'nc-diamond',  class: ''    },
    { path: '/maps', title: 'Mapa', icon:'nc-pin-3', class: '' },
    { path: '/icons',   title: 'Icons', icon:'nc-diamond',    class: '' },
];
