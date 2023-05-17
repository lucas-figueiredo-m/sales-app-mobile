import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';

export type StackNavigationScreenOptions<
  NavigatorParams extends ParamListBase,
  ScreenNavigationType,
> =
  | StackNavigationOptions
  | ((props: {
      route: RouteProp<NavigatorParams, keyof NavigatorParams>;
      navigation: ScreenNavigationType;
    }) => StackNavigationOptions)
  | undefined;
