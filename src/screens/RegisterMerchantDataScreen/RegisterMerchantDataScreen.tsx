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
  companyName: '',
  taxpayerId: '',
  tradeName: '',
};

export const RegisterMerchantDataScreen: React.FC = () => {
  const { navigate } =
    useNavigation<ClientNavigationProp<ClientRoutes.MerchantData>>();

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
              <Label.H3 t="Dados do estabelecimento" />
              <Form.Field
                control={control}
                rules={{ required: 'Informe o CNPJ' }}
                error={errors?.taxpayerId?.message}
                name="taxpayerId"
                placeholder="CNPJ"
              />
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
              <Button.Large
                backgroundColor={Colors.Flame}
                t="common.continue"
                labelColor={Colors.White}
                onPress={() => navigate(ClientRoutes.MerchantAddress)}
              />
            </View>
          )}
        </Form>
      </View>
    </Container>
  );
};
