import { useNavigation } from '@react-navigation/native';
import React from 'react';

import '@salesapp/extensions';

import { View } from 'react-native';
import { Colors } from '@salesapp/theme';
import { Container, Button, Form, Label } from '@salesapp/components';
import { createThemedStyles, useThemedStyles } from '@salesapp/hooks';
import { NewClientNavigationProp, NewClientRoutes } from '../types';
import { formatTaxpayerId } from '@salesapp/utils';
import { useNewClientContext } from '../context';

// TODO: use KeyboardAvoidingView

type NavigationType = NewClientNavigationProp<NewClientRoutes.MerchantData>;

export const NewClientTaxpayerId: React.FC = () => {
  const styles = useThemedStyles(themedStyles);
  const { navigate } = useNavigation<NavigationType>();

  const { onSearchTaxpayerIdInfo, loading, control, errors } =
    useNewClientContext();

  const onPress = async () => {
    try {
      await onSearchTaxpayerIdInfo();
      navigate(NewClientRoutes.MerchantData);
    } catch {}
  };

  return (
    <Container>
      <View style={styles.root}>
        <Label.H3 t="Dados do estabelecimento" />
        <Form.Field
          control={control}
          error={errors?.taxpayerId?.message}
          name="taxpayerId"
          placeholder="CNPJ"
          formatter={formatTaxpayerId}
          maxLength={18}
        />
        <Button.Large
          backgroundColor={Colors.Flame}
          t="common.continue"
          labelColor={Colors.White}
          onPress={onPress}
          loading={loading}
        />
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
