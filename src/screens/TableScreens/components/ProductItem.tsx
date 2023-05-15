import React from 'react';
import { View } from 'react-native';
import { Label } from '@salesapp/components';
import { createThemedStyles, useThemedStyles } from '@salesapp/hooks';
import { Product } from '@salesapp/types';
import { toCurrency } from '@salesapp/utils';

type ProductItemProps = {
  product: Product;
};

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const styles = useThemedStyles(themedStyles);

  return (
    <View style={styles.root}>
      <Label.H3 t={product.name} />
      <Label.H3 t={toCurrency(product.price)} />
    </View>
  );
};

const themedStyles = createThemedStyles(({ spacing }) => ({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.sm,
  },
}));
