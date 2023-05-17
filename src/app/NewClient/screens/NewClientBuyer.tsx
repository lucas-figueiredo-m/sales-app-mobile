import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { View } from 'react-native';
import { Colors } from '@salesapp/theme';
import { Container, Button, Form, Label } from '@salesapp/components';
import { createThemedStyles, useThemedStyles } from '@salesapp/hooks';
import { NewClientNavigationProp, NewClientRoutes } from '../types';

// TODO: use KeyboardAvoidingView

const formData = {
  buyerFirstName: '',
  buyerLastName: '',
  phone: '',
};

type NavigationType = NewClientNavigationProp<NewClientRoutes.MerchantData>;

export const NewClientBuyer: React.FC = () => {
  const styles = useThemedStyles(themedStyles);
  const { navigate } = useNavigation<NavigationType>();

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
              <Label.H3 t="Dados do comprador" />
              <Form.Field
                control={control}
                rules={{ required: 'Informe o Telefone' }}
                error={errors?.phone?.message}
                name="phone"
                placeholder="Telefone"
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
              <Button.Large
                backgroundColor={Colors.Flame}
                t="common.continue"
                labelColor={Colors.White}
                onPress={() => null}
              />
            </View>
          )}
        </Form>
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
