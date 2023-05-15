import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Colors } from '@salesapp/theme';
import { Container, Button, Form, Label } from '@salesapp/components';
import { ClientNavigationProp, ClientRoutes } from '@salesapp/types';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: Colors.White,
    // maxHeight: '100%',
    height: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 15,
  },
  height: { height: 100 },
  width: { width: '40%' },
});

// TODO: use KeyboardAvoidingView

const formData = {
  address: '',
  number: '',
  complement: '',
  zipCode: '',
};

export const RegisterMerchantAddressScreen: React.FC = () => {
  const { navigate } =
    useNavigation<ClientNavigationProp<ClientRoutes.MerchantAddress>>();

  const onSubmit = () => {
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
  };
  return (
    <Container>
      <View style={styles.root}>
        <Form formData={formData}>
          {({ control, errors, handleSubmit }) => (
            <View>
              <Label.H3 t="Endereco" />
              <Form.Field
                control={control}
                rules={{ required: 'Informe o CEP' }}
                error={errors?.zipCode?.message} // add neighborhood info to database
                name="zipCode" // add neighborhood info to database
                placeholder="CEP"
              />
              <Form.Field
                control={control}
                rules={{ required: 'Informe o Bairro' }}
                error={errors?.zipCode?.message} // add neighborhood info to database
                name="zipCode" // add neighborhood info to database
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
                error={errors?.complement?.message}
                name="complement"
                placeholder="Complemento"
              />
              <Form.Field
                control={control}
                rules={{ required: 'Informe a cidade' }}
                error={errors?.zipCode?.message} // add city to database
                name="zipCode" // add city to database
                placeholder="Cidade"
              />
              <Form.Field
                control={control}
                rules={{ required: 'Informe o Estado' }}
                error={errors?.zipCode?.message} // add state to database
                name="zipCode" // add state to database
                placeholder="Estado"
              />
              <Button.Large
                backgroundColor={Colors.Flame}
                t="common.continue"
                labelColor={Colors.White}
                onPress={() => navigate(ClientRoutes.MerchantBuyer)}
              />
            </View>
          )}
        </Form>
      </View>
    </Container>
  );
};
