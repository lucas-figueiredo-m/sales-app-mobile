import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NewClientParams, NewClientRoutes } from './types';
import { useNewClientNavigator } from './hooks';
import {
  NewClientAddress,
  NewClientBuyer,
  NewClientData,
  NewClientTaxpayerId,
} from './screens';

const Stack = createStackNavigator<NewClientParams>();

export const NewClientNavigator: React.FC = () => {
  const { navigatorScreenOptions, merchantTaxpayeridScreenOptions } =
    useNewClientNavigator();
  return (
    <Stack.Navigator screenOptions={navigatorScreenOptions}>
      <Stack.Screen
        options={merchantTaxpayeridScreenOptions}
        name={NewClientRoutes.MerchantTaxId}
        component={NewClientTaxpayerId}
      />
      <Stack.Screen
        name={NewClientRoutes.MerchantData}
        component={NewClientData}
      />
      <Stack.Screen
        name={NewClientRoutes.MerchantAddress}
        component={NewClientAddress}
      />
      <Stack.Screen
        name={NewClientRoutes.MerchantBuyer}
        component={NewClientBuyer}
      />
    </Stack.Navigator>
  );
};
