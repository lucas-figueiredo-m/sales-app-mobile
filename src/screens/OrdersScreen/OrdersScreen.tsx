import React from 'react';
import { SafeAreaView } from 'react-native';
import { ClientModel, database, OrdersModel } from '@salesapp/database';
import { Tables } from '@salesapp/types';
import { OrderList } from './components';

const Orders = database.get<OrdersModel>(Tables.Orders).query().observe();
const Clients = database.get<ClientModel>(Tables.Client).query().observe();

export const OrdersScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <OrderList orders={Orders} clients={Clients} />
    </SafeAreaView>
  );
};
