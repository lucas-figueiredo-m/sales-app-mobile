import { StackNavigationProp } from '@react-navigation/stack';

export enum ClientRoutes {
  MerchantData = 'MerchantData',
  MerchantAddress = 'MerchantAddress',
  MerchantBuyer = 'MerchantBuyer',
}

export type ClientParams = {
  [ClientRoutes.MerchantData]: undefined;
  [ClientRoutes.MerchantAddress]: undefined;
  [ClientRoutes.MerchantBuyer]: undefined;
};

export type ClientNavigationProp<T extends ClientRoutes> = StackNavigationProp<
  ClientParams,
  T
>;
