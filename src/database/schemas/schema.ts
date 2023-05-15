import { appSchema } from '@nozbe/watermelondb';

import {
  ClientTable,
  ProductTable,
  OrderItemTable,
  OrderTable,
  HistoricalProductPriceTable,
} from '../tables';
import Config from 'react-native-config';

console.log('Config: ', Config);

export const schema = appSchema({
  version: parseInt(Config.SCHEMA_VERSION, 10),
  tables: [
    ClientTable,
    ProductTable,
    OrderItemTable,
    OrderTable,
    HistoricalProductPriceTable,
  ],
});
