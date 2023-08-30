interface MenuItems {
  icon: string;
  title: string;
  route: string;
}

export const sidebarMenuItems: MenuItems[] = [
  {
    icon: '/icons/svg/home.svg',
    title: 'Inicio',
    route: '/',
  },
  {
    icon: '/icons/svg/cart.svg',
    title: 'Productos',
    route: '/product',
  },
];
