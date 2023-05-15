export enum TabRoutes {
  Home = 'Home',
  Clients = 'Clients',
  Orders = 'Orders',
  Menu = 'Menu'
}

export type TabParams = {
  [TabRoutes.Home]: undefined
  [TabRoutes.Clients]: undefined
  [TabRoutes.Orders]: undefined
  [TabRoutes.Menu]: undefined
}
