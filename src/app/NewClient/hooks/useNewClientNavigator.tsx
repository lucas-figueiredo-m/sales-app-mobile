import React from 'react';
import {
  MainRoutes,
  MainStackNavigation,
  StackNavigationScreenOptions,
} from '@salesapp/types';
import {
  NewClientNavigationProp,
  NewClientParams,
  NewClientRoutes,
} from '../types';
import {
  createThemedStyles,
  useThemedStyles,
  useColorScheme,
} from '@salesapp/hooks';
import { HeaderLeft, HeaderRight } from '../components';

type NewClientNavigatorNavigationType =
  MainStackNavigation<MainRoutes.AddClient>;

type NewClientNavigatorType = StackNavigationScreenOptions<
  NewClientParams,
  NewClientNavigatorNavigationType
>;

type MerchantTaxpayerIdNavigationType =
  NewClientNavigationProp<NewClientRoutes.MerchantTaxId>;

type MerchantTaxpayerIdNavigatorType = StackNavigationScreenOptions<
  NewClientParams,
  MerchantTaxpayerIdNavigationType
>;

export const useNewClientNavigator = () => {
  const styles = useThemedStyles(themedStyles);
  const colors = useColorScheme();
  const navigatorScreenOptions: NewClientNavigatorType = {
    title: 'NOVO CADASTRO',
    headerTitleStyle: styles.title,
    headerTintColor: colors.Header.Tint,
    headerLeft: HeaderLeft,
    cardStyle: {
      flex: 1,
      backgroundColor: colors.CommonColors.White,
    },
  };

  const merchantTaxpayeridScreenOptions: MerchantTaxpayerIdNavigatorType = ({
    navigation,
  }) => ({
    headerLeft: () => undefined,
    headerRight: props => (
      <HeaderRight {...props} onPress={() => navigation.goBack()} />
    ),
  });

  return { navigatorScreenOptions, merchantTaxpayeridScreenOptions };
};

const themedStyles = createThemedStyles(({ fonts }) => ({
  title: {
    fontFamily: fonts.family.Montserrat,
  },
}));
