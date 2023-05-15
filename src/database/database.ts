import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { migrations } from './migrations';
import {
  ClientModel,
  ProductModel,
  OrderItemsModel,
  OrdersModel,
  HistoricalProductPrice,
} from './models';
import { schema } from './schemas';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError: (error) => {
    console.warn('Error: ', error);
  },
});

export const database = new Database({
  adapter,
  modelClasses: [
    ClientModel,
    ProductModel,
    OrderItemsModel,
    OrdersModel,
    HistoricalProductPrice,
  ],
  // actionsEnabled: true
});

if (__DEV__) {
  // Import connectDatabases function and required DBDrivers
  console.log('[DEBUGGING]: ');
  const {
    connectDatabases,
    WatermelonDB,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
  } = require('react-native-flipper-databases');

  connectDatabases([
    new WatermelonDB(database), // Pass in database definition
  ]);
}
