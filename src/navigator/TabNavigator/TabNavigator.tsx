import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Label, SVG } from '@salesapp/components';
import { Home, Menu, People, UserAdd, Document } from '@salesapp/icons';
import React from 'react';
import {
  ClientsScreen,
  HomeScreen,
  MenuScreen,
  OrdersScreen,
} from '@salesapp/screens';
import { TabParams, TabRoutes } from './TabTypes';

import { TabBar } from './components/TabBar';
import { Colors } from '@salesapp/theme';
import { useTranslation, useRootNavigator, useTheme } from '@salesapp/hooks';
import { Pressable, StyleSheet } from 'react-native';
import { defaultHitSlop } from '@salesapp/constants';
import { MainRoutes } from '@salesapp/types';

const styles = StyleSheet.create({
  rightButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 5,
    marginRight: 15,
  },
});

const Tab = createBottomTabNavigator<TabParams>();

// https://www.youtube.com/watch?v=bNuwwkgRQOk
// https://reactnavigation.org/docs/bottom-tab-navigator#tabbar

export const TabNavigator: React.FC = () => {
  const t = useTranslation();
  const rootNavigator = useRootNavigator();
  const { Font } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.Flame,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name={TabRoutes.Home}
        component={HomeScreen}
        options={{
          tabBarLabel: t('tabNames.home'),
          tabBarIcon: ({ color }) => <SVG xml={Home} color={color} />,
        }}
      />
      <Tab.Screen
        name={TabRoutes.Clients}
        component={ClientsScreen}
        options={{
          tabBarLabel: t('tabNames.clients'),
          headerTitle: t('tabNames.clients'),
          headerShown: true,
          headerRight: () => (
            <Pressable
              onPress={() => rootNavigator.navigate(MainRoutes.AddClient)}
              hitSlop={defaultHitSlop}
              style={styles.rightButtonContainer}>
              <Label.H4
                t="clients.new"
                style={[{ color: Colors.Flame }, Font.transform.uppercase]}
              />
              <SVG
                xml={UserAdd}
                style={styles.icon}
                width={20}
                height={20}
                color={Colors.Flame}
              />
            </Pressable>
          ),
          tabBarIcon: ({ color }) => <SVG xml={People} color={color} />,
        }}
      />
      <Tab.Screen
        name={TabRoutes.Orders}
        component={OrdersScreen}
        options={{
          tabBarLabel: t('tabNames.orders'),
          tabBarIcon: ({ color }) => <SVG xml={Document} color={color} />,
        }}
      />
      <Tab.Screen
        name={TabRoutes.Menu}
        component={MenuScreen}
        options={{
          tabBarLabel: t('tabNames.menu'),
          tabBarIcon: ({ color }) => <SVG xml={Menu} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
