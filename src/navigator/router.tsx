import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { rootNavigationRef } from '@salesapp/hooks';
import React from 'react';
import {
  AddOrderScreen,
  BovineTableScreen,
  GibletsTableScreen,
  LoginScreen,
  OrderDetailsScreen,
  SettingsScreen,
  SplashScreen,
  SwineTableScreen,
} from '@salesapp/screens';
import { modalOptions } from './config';
import { MainRoutes, MainStackParams } from '@salesapp/types';
import { TabNavigator } from './TabNavigator/TabNavigator';
import { NewClientNavigator } from '@saleapp/journeys';

const Stack = createStackNavigator<MainStackParams>();

export const Router: React.FC = () => {
  return (
    <NavigationContainer ref={rootNavigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={MainRoutes.Splash} component={SplashScreen} />
        <Stack.Screen name={MainRoutes.Login} component={LoginScreen} />
        <Stack.Screen name={MainRoutes.Tabs} component={TabNavigator} />

        {/** // TODO: add a navigator instead of a group to handle in-modal navigation */}
        <Stack.Screen
          name={MainRoutes.AddClient}
          component={NewClientNavigator}
          options={modalOptions}
        />

        <Stack.Group screenOptions={modalOptions}>
          <Stack.Screen name={MainRoutes.AddOrder} component={AddOrderScreen} />
        </Stack.Group>
        <Stack.Screen
          options={{ headerShown: true }}
          name={MainRoutes.Settings}
          component={SettingsScreen}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name={MainRoutes.BovineTable}
          component={BovineTableScreen}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name={MainRoutes.SwineTable}
          component={SwineTableScreen}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name={MainRoutes.GibletTable}
          component={GibletsTableScreen}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name={MainRoutes.OrderDetails}
          component={OrderDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
