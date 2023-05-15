import { OrderItemsModel } from '@salesapp/database';
import { createThemedStyles, useThemedStyles } from '@salesapp/hooks';
import { Label } from '@salesapp/components';
import React from 'react';
import { View } from 'react-native';

type OrderItemListCardProps = {
  orderItem: OrderItemsModel;
};

export const OrderItemsListCard: React.FC<OrderItemListCardProps> = ({
  orderItem,
}) => {
  const styles = useThemedStyles(themedStyles);

  return (
    <View style={styles.root}>
      <Label.H3 t={orderItem.id} />
    </View>
  );
};

const themedStyles = createThemedStyles(() => ({
  root: {},
}));
