import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabParams } from './TabTypes';

export enum MainRoutes {
  Tabs = 'Tabs',
  AddClient = 'AddClient',
  AddOrder = 'AddOrder',
  Login = 'Login',
  Splash = 'Splash',
  Settings = 'Settings',
  BovineTable = 'BovineTable',
  SwineTable = 'SwineTable',
  GibletTable = 'GibletTable',
  OrderDetails = 'OrderDetails',
}

export type MainStackParams = {
  [MainRoutes.Tabs]: NavigatorScreenParams<TabParams>;
  [MainRoutes.AddClient]: undefined;
  [MainRoutes.AddOrder]: undefined;
  [MainRoutes.Login]: undefined;
  [MainRoutes.Splash]: undefined;
  [MainRoutes.Settings]: undefined;
  [MainRoutes.BovineTable]: undefined;
  [MainRoutes.SwineTable]: undefined;
  [MainRoutes.GibletTable]: undefined;
  [MainRoutes.OrderDetails]: undefined;
};

export type MainStackRoute<T extends MainRoutes> = RouteProp<
  MainStackParams,
  T
>;

export type MainStackNavigation<T extends MainRoutes> = StackNavigationProp<
  MainStackParams,
  T
>;
