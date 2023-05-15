import { OrderColumns, Tables } from '@salesapp/types';
import { ColumnType, tableSchema } from '@nozbe/watermelondb';

type OrderTableColumnsType = {
  name: OrderColumns;
  type: ColumnType;
};

const OrderTableColumns: OrderTableColumnsType[] = [
  { name: OrderColumns.serverId, type: 'number' },
  { name: OrderColumns.clientId, type: 'number' },
  { name: OrderColumns.estimatedOrderPrice, type: 'number' },
  { name: OrderColumns.orderTotalPrice, type: 'number' },
  { name: OrderColumns.status, type: 'string' },
  { name: OrderColumns.createdAt, type: 'number' },
  { name: OrderColumns.updatedAt, type: 'number' },
];

export const OrderTable = tableSchema({
  name: Tables.Orders,
  columns: OrderTableColumns,
});
