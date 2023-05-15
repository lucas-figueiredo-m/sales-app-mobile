import {
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import { Platform } from 'react-native';
import { Colors } from '@salesapp/theme';

export const modalOptions: StackNavigationOptions = {
  presentation: Platform.OS === 'ios' ? 'modal' : 'transparentModal',
  headerShown: false,
  detachPreviousScreen: false,
  cardStyle: {
    // justifyContent: "flex-end",
    flex: 1,
    backgroundColor: Colors.Transparent,
  },
  ...Platform.select({
    android: TransitionPresets.FadeFromBottomAndroid,
  }),
};
