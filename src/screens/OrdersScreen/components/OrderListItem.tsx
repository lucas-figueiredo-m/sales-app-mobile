import { ClientModel, OrdersModel } from '@salesapp/database';
import { createThemedStyles, useThemedStyles } from '@salesapp/hooks';
import { toCurrency } from '@salesapp/utils';
import withObservables from '@nozbe/with-observables';
import { useNavigation } from '@react-navigation/native';
import { MainRoutes, MainStackNavigation } from '@salesapp/types';
import { Label } from '@salesapp/components';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { find, from, of } from 'rxjs';

type OrderListItemProps = {
  order: OrdersModel;
  client: ClientModel;
};

type OrdersNavigation = MainStackNavigation<MainRoutes.OrderDetails>;

export const OrderListItemToObserve: React.FC<OrderListItemProps> = ({
  order,
  client,
}) => {
  const styles = useThemedStyles(themedStyles);

  const { navigate } = useNavigation<OrdersNavigation>();

  const onPress = () => {
    navigate(MainRoutes.OrderDetails);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <Label.H3 t={client.trade_name} />
      <Label.H3 t={toCurrency(order.estimated_order_price)} />
    </TouchableOpacity>
  );
};

const themedStyles = createThemedStyles(({ colors }) => ({
  root: {},
}));

type ObservableProps = {
  clients: ClientModel[];
  order: OrdersModel;
};

const enhanced = withObservables(
  ['clients', 'order'],
  ({ clients, order }: ObservableProps) => ({
    order,
    client: from(clients).pipe(find(x => x.server_id === order.client_id)),
  }),
);

export const OrderListItem: React.FC<ObservableProps> = enhanced(
  OrderListItemToObserve,
);
