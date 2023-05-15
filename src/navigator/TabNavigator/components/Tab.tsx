import {
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  options: BottomTabNavigationOptions;
  isFocused: boolean;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  routeKey: string;
  routeName: string;
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Tab: React.FC<Props> = ({
  options,
  isFocused,
  navigation,
  routeName,
  routeKey,
}) => {
  // TODO: break this nested ternary
  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : routeName;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: routeKey,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate(routeName, { name: routeName, merge: true });
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: routeKey,
    });
  };

  const color =
    (isFocused
      ? options.tabBarActiveTintColor
      : options.tabBarInactiveTintColor) || '#000';

  const { tabBarIcon } = options;

  const icon = tabBarIcon
    ? tabBarIcon({ focused: isFocused, color, size: 24 })
    : undefined;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.button}>
      {icon}
      {typeof label === 'string' && <Text style={{ color }}>{label}</Text>}
    </TouchableOpacity>
  );
};
