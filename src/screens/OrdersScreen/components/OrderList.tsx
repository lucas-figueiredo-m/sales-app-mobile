import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { createThemedStyles, useThemedStyles } from '@salesapp/hooks';
import { View } from 'react-native';
import withObservables, { ObservableifyProps } from '@nozbe/with-observables';
import { OrderListItem } from './OrderListItem';
import { ClientModel, OrdersModel } from '@salesapp/database';
import { Observable } from 'rxjs';

interface Props {
  orders: OrdersModel[];
  clients: ClientModel[];
}

type InputProps = ObservableifyProps<Props, 'orders', 'clients'>;

const OrderListToObserve: React.FC<Props> = ({ orders, clients }) => {
  const styles = useThemedStyles(themedStyles);

  return (
    <View style={styles.root}>
      <FlashList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <OrderListItem order={item} clients={clients} />
        )}
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
  ['orders', 'clients'],
  ({ orders, clients }: InputProps) => ({
    orders,
    clients,
  }),
);

type OrderListProps = {
  orders: Observable<OrdersModel[]>;
  clients: Observable<ClientModel[]>;
};

export const OrderList: React.FC<OrderListProps> = enhanced(OrderListToObserve);
