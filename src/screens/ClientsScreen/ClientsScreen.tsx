import React from 'react';
import { View } from 'react-native';
import { ClientCardList } from './components/ClientsCard';
import { ClientModel, database } from '@salesapp/database';
import { Tables } from '@salesapp/types';

const Clients = database.get<ClientModel>(Tables.Client).query().observe();

export const ClientsScreen: React.FC = () => {
  return (
    <View>
      <ClientCardList clients={Clients} />
    </View>
  );
};
