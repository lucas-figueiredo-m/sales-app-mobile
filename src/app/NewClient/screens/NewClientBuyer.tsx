import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { View } from 'react-native';
import { Colors } from '@salesapp/theme';
import { Container, Button, Form, Label } from '@salesapp/components';
import { createThemedStyles, useThemedStyles } from '@salesapp/hooks';
import { NewClientNavigationProp, NewClientRoutes } from '../types';
import { PaymentMethodOptions, formatPhoneNumber } from '@salesapp/utils';
import { useNewClientContext } from '../context';
import { MainRoutes, TabRoutes } from '@salesapp/types';
// TODO: use KeyboardAvoidingView

type NavigationType = NewClientNavigationProp<NewClientRoutes.MerchantData>;

export const NewClientBuyer: React.FC = () => {
  const styles = useThemedStyles(themedStyles);
  const { navigate } = useNavigation<NavigationType>();

  const { control, errors, registerNewClient } = useNewClientContext();

  const onPressCallback = () => {
    console.log('Testing 4');
    navigate(MainRoutes.Tabs, { screen: TabRoutes.Clients });
  };

  return (
    <Container>
      <View style={styles.root}>
        <View>
          <Label.H3 t="Dados do comprador" />
          <Form.Field
            control={control}
            rules={{ required: 'Informe o Telefone' }}
            error={errors?.phone?.message}
            name="phone"
            maxLength={15}
            placeholder="Telefone"
            formatter={formatPhoneNumber}
          />
          <Form.Field
            control={control}
            rules={{ required: 'Informe um nome' }}
            error={errors?.buyerFirstName?.message}
            name="buyerFirstName"
            placeholder="Nome"
          />
          <Form.Field
            control={control}
            rules={{ required: 'Informe um sobrenome' }}
            error={errors?.buyerLastName?.message}
            name="buyerLastName"
            placeholder="Sobrenome"
          />
          <Form.Picker
            control={control}
            name="defaultPaymentMethod"
            options={PaymentMethodOptions}
          />
          <Button.Large
            backgroundColor={Colors.Flame}
            t="common.continue"
            labelColor={Colors.White}
            onPress={() => registerNewClient(onPressCallback)}
          />
        </View>
      </View>
    </Container>
  );
};

const themedStyles = createThemedStyles(({ colors }) => ({
  root: {
    width: '100%',
    backgroundColor: colors.CommonColors.White,
    // maxHeight: '100%',
    height: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 15,
  },
  height: { height: 100 },
  width: { width: '40%' },
}));
