import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Colors } from '@salesapp/theme';
import { Container, Header } from '@salesapp/components';
import { X } from '@salesapp/icons';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: Colors.White,
    maxHeight: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 15,
  },
  spacer: {
    height: 100,
  },
});

export const AddOrderScreen: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <Container>
      <View style={styles.root}>
        <Header
          icon={X as unknown as string}
          onLeftPress={goBack}
          label="modal.newOrder.title"
        />
        <View style={styles.spacer} />
      </View>
    </Container>
  );
};
