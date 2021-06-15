
export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTESNABAR: RouteInfo[] = [
    { path: '/dashboard',     title: 'Inicio',            icon:'nc-bank',  class: '' },
    { path: '/ourservices',   title: 'Servicios',         icon:'nc-briefcase-24', class: '' },
    { path: '/products',      title: 'Productos',         icon:'nc-bag-16',  class: ''    },
    { path: '/maps',          title: 'Contactanos',       icon:'nc-pin-3', class: '' },
    //{ path: '/chat/response/manager',          title: 'Chat',       icon:'nc-chat-33', class: '' },
    //{ path: '/category/add',  title: 'Categorias',        icon:'nc-tile-56',    class: ''  },
    //{ path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },

];
