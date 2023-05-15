import { createStackNavigator } from '@react-navigation/stack';
import {
  HeaderBackButtonProps,
  HeaderButtonProps,
} from '@react-navigation/elements';
import React from 'react';
import {
  RegisterMerchantAddressScreen,
  RegisterMerchantBuyerScreen,
  RegisterMerchantDataScreen,
} from '@salesapp/screens';
import { Colors } from '@salesapp/theme';
import { ClientParams, ClientRoutes } from './NewClientTypes';
import {
  createThemedStyles,
  useColorScheme,
  useThemedStyles,
} from '@salesapp/hooks';
import { TouchableOpacity } from 'react-native';
import { SVG } from '@salesapp/components';
import { ChevronLeft, X } from '@salesapp/icons';

const Stack = createStackNavigator<ClientParams>();

const HeaderLeft: React.FC<HeaderBackButtonProps> = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <SVG
        xml={ChevronLeft as unknown as string}
        color={props.tintColor}
        width={40}
        height={40}
      />
    </TouchableOpacity>
  );
};

const HeaderRight: React.FC<
  HeaderButtonProps & { onPress: () => void }
> = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <SVG
        xml={X as unknown as string}
        color={props.tintColor}
        width={26}
        height={26}
      />
    </TouchableOpacity>
  );
};

// TODO: create objects for headerLeft and headerRight components. Bad smells

const NewClientStack: React.FC = () => {
  const styles = useThemedStyles(themedStyles);
  const colors = useColorScheme();
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        title: 'NOVO CADASTRO',
        headerTitleStyle: styles.title,
        headerTintColor: colors.Header.Tint,
        headerLeft: props => <HeaderLeft {...props} />,
        cardStyle: {
          flex: 1,
          backgroundColor: Colors.White,
        },
      }}>
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => undefined,
          headerRight: props => (
            <HeaderRight {...props} onPress={() => navigation.goBack()} />
          ),
        })}
        name={ClientRoutes.MerchantData}
        component={RegisterMerchantDataScreen}
      />
      <Stack.Screen
        name={ClientRoutes.MerchantAddress}
        component={RegisterMerchantAddressScreen}
      />
      <Stack.Screen
        name={ClientRoutes.MerchantBuyer}
        component={RegisterMerchantBuyerScreen}
      />
    </Stack.Navigator>
  );
};

const themedStyles = createThemedStyles(({ fonts, colors }) => ({
  title: {
    fontFamily: fonts.family.Montserrat,
  },
}));

export default NewClientStack;
