import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { View } from 'react-native';
import { Colors } from '@salesapp/theme';
import { Container, Button, Form, Label } from '@salesapp/components';
import { createThemedStyles, useThemedStyles } from '@salesapp/hooks';
import { NewClientNavigationProp, NewClientRoutes } from '../types';
import { formatZipCode } from '@salesapp/utils';
import { useNewClientContext } from '../context';

// TODO: use KeyboardAvoidingView

type NavigationType = NewClientNavigationProp<NewClientRoutes.MerchantData>;

export const NewClientAddress: React.FC = () => {
  const styles = useThemedStyles(themedStyles);
  const { navigate } = useNavigation<NavigationType>();

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

  const { control, errors, trigger } = useNewClientContext();

  const onPress = async () => {
    if (!trigger) return;
    const valid = await trigger([
      'zipCode',
      'neighborhood',
      'address',
      'complement',
      'city',
      'state',
      'number',
    ]);

    if (!valid) return;

    navigate(NewClientRoutes.MerchantBuyer);
  };

  return (
    <Container>
      <View style={styles.root}>
        <View>
          <Label.H3 t="Endereco" />
          <Form.Field
            control={control}
            rules={{ required: 'Informe o CEP' }}
            error={errors?.zipCode?.message} // add neighborhood info to database
            name="zipCode" // add neighborhood info to database
            placeholder="CEP"
            formatter={formatZipCode}
          />
          <Form.Field
            control={control}
            rules={{ required: 'Informe o Bairro' }}
            error={errors?.neighborhood?.message} // add neighborhood info to database
            name="neighborhood" // add neighborhood info to database
            placeholder="Bairro"
          />
          <Form.Field
            control={control}
            rules={{ required: 'Informe o Endereco' }}
            error={errors?.address?.message}
            name="address"
            placeholder="Endereco"
          />
          <Form.Field
            control={control}
            rules={{ required: 'Informe o Endereco' }}
            error={errors?.number?.message}
            name="number"
            placeholder="Número"
          />
          <Form.Field
            control={control}
            error={errors?.complement?.message}
            name="complement"
            placeholder="Complemento"
          />
          <Form.Field
            control={control}
            rules={{ required: 'Informe a cidade' }}
            error={errors?.city?.message} // add city to database
            name="city" // add city to database
            placeholder="Cidade"
          />
          <Form.Field
            control={control}
            rules={{ required: 'Informe o Estado' }}
            error={errors?.state?.message} // add state to database
            name="state" // add state to database
            placeholder="Estado"
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
