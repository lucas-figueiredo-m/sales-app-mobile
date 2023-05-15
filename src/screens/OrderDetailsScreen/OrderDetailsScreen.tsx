import React from 'react';
import { SafeAreaView } from 'react-native';
import { database, OrderItemsModel } from '@salesapp/database';
import { Tables } from '@salesapp/types';
import { OrderItemList } from './components';

const Orders = database
  .get<OrderItemsModel>(Tables.OrderItems)
  .query()
  .observe();

export const OrderDetailsScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <OrderItemList orderItems={Orders} />
    </SafeAreaView>
  );
};
