import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainRoutes, MainStackNavigation } from './RouterTypes';

export enum TabRoutes {
  Home = 'Home',
  Clients = 'Clients',
  Orders = 'Orders',
  Menu = 'Menu',
}

export type TabParams = {
  [TabRoutes.Home]: undefined;
  [TabRoutes.Clients]: undefined;
  [TabRoutes.Orders]: undefined;
  [TabRoutes.Menu]: undefined;
};

export type TabNavigation<T extends TabRoutes> = CompositeNavigationProp<
  BottomTabNavigationProp<TabParams, T>, // First goes the current navigator
  MainStackNavigation<MainRoutes.Tabs> // Second goes the parent navigator and the correspondent screen that this nested navigator goes in
>;
