import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { View } from 'react-native';
import { Colors } from '@salesapp/theme';
import { Container, Button, Form, Label } from '@salesapp/components';
import { createThemedStyles, useThemedStyles } from '@salesapp/hooks';
import { NewClientNavigationProp, NewClientRoutes } from '../types';
import { useNewClientContext } from '../context';
import { ClientTypeOptions, formatStateRegistry } from '@salesapp/utils';

// TODO: use KeyboardAvoidingView

type NavigationType = NewClientNavigationProp<NewClientRoutes.MerchantData>;

export const NewClientData: React.FC = () => {
  const styles = useThemedStyles(themedStyles);
  const { navigate } = useNavigation<NavigationType>();

  const { control, errors, trigger } = useNewClientContext();

  // const onSubmit = () => {
  // await ClientService.create({
  //   companyName: `Arthur ${count}`,
  //   taxpayerId: '104.979.466-45',
  //   employeeId: 1,
  //   tradeName: `Lucas ${count}`,
  //   type: 'Test',
  //   buyerFirstName: 'Lucas',
  //   buyerLastName: 'Figueiredo',
  //   phone: '32991376622',
  //   address: 'Rua teste',
  //   number: '123',
  //   complement: 'Apt 303',
  //   zipCode: '36045120',
  //   active: true,
  // });
  // };

  const onPress = async () => {
    if (!trigger) return;

    const valid = await trigger([
      'companyName',
      'tradeName',
      'stateRegistry',
      'companyType',
    ]);

    if (!valid) return;

    navigate(NewClientRoutes.MerchantAddress);
  };

  return (
    <Container>
      <View style={styles.root}>
        <View>
          <Label.H3 t="Dados do estabelecimento" />
          <Form.Field
            control={control}
            rules={{ required: 'Informe a Razão Social' }}
            error={errors?.companyName?.message}
            name="companyName"
            placeholder="Razão Social"
          />
          <Form.Field
            control={control}
            rules={{ required: 'Informe o Nome Fantasia' }}
            error={errors?.tradeName?.message}
            name="tradeName"
            placeholder="Nome Fantasia"
          />
          <Form.Field
            control={control}
            rules={{ required: 'Informe a inscricão estadual' }}
            error={errors?.stateRegistry?.message}
            name="stateRegistry"
            placeholder="Inscricão Estadual"
            formatter={formatStateRegistry}
          />
          <Form.Picker
            control={control}
            error={errors?.companyType?.message}
            options={ClientTypeOptions}
            name="companyType"
          />
          <Button.Large
            backgroundColor={Colors.Flame}
            t="common.continue"
            labelColor={Colors.White}
            onPress={onPress}
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
