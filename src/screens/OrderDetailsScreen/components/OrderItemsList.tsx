import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { createThemedStyles, useThemedStyles } from '@salesapp/hooks';
import { View } from 'react-native';
import withObservables, { ObservableifyProps } from '@nozbe/with-observables';
import { OrderItemsListCard } from './OrderItemsListCard';
import { OrderItemsModel } from '@salesapp/database';

interface Props {
  orderItems: OrderItemsModel[];
}

type InputProps = ObservableifyProps<Props, 'orderItems'>;

const OrderItemListToObserve: React.FC<Props> = ({ orderItems }) => {
  const styles = useThemedStyles(themedStyles);

  return (
    <View style={styles.root}>
      <FlashList
        data={orderItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <OrderItemsListCard orderItem={item} />}
        estimatedItemSize={100}
      />
    </View>
  );
};

const themedStyles = createThemedStyles(({ colors }) => ({
  root: {
    width: '100%',
    height: '100%',
  },
}));

const enhanced = withObservables(
  ['orderItems'],
  ({ orderItems }: InputProps) => {
    console.log(
      '[Orders Items]: ',
      orderItems.subscribe(orderItem =>
        console.log('[OBSERVED ITEMS]: ', orderItem),
      ),
    );
    return {
      orderItems,
    };
  },
);

export const OrderItemList = enhanced(OrderItemListToObserve);
