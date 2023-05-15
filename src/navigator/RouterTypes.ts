import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabParams } from './TabNavigator/TabTypes';

export enum MainRoutes {
  Tabs = 'Tabs',
  AddClient = 'AddClient',
  AddOrder = 'AddOrder',
  Login = 'Login',
}

export type MainStackParams = {
  [MainRoutes.Tabs]: NavigatorScreenParams<TabParams>;
  [MainRoutes.AddClient]: undefined;
  [MainRoutes.AddOrder]: undefined;
  [MainRoutes.Login]: undefined;
};

export type MainStackRoute<T extends MainRoutes> = RouteProp<
  MainStackParams,
  T
>;

export type MainStackNavigation<T extends MainRoutes> = StackNavigationProp<
  MainStackParams,
  T
>;
