import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainRoutes, MainStackNavigation } from '@salesapp/types';

export enum NewClientRoutes {
  MerchantTaxId = 'MerchantTaxId',
  MerchantData = 'MerchantData',
  MerchantAddress = 'MerchantAddress',
  MerchantBuyer = 'MerchantBuyer',
}

export type NewClientParams = {
  [NewClientRoutes.MerchantTaxId]: undefined;
  [NewClientRoutes.MerchantData]: undefined;
  [NewClientRoutes.MerchantAddress]: undefined;
  [NewClientRoutes.MerchantBuyer]: undefined;
};

export type NewClientNavigationProp<T extends NewClientRoutes> =
  CompositeNavigationProp<
    StackNavigationProp<NewClientParams, T>,
    MainStackNavigation<MainRoutes.Tabs>
  >;
