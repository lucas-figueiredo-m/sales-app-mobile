import { OrderItemColumns, Tables } from '@salesapp/types';
import { ColumnType, tableSchema } from '@nozbe/watermelondb';

type OrderItemTableColumnsType = {
  name: OrderItemColumns;
  type: ColumnType;
};

const OrderItemTableColumns: OrderItemTableColumnsType[] = [
  { name: OrderItemColumns.serverId, type: 'number' },
  { name: OrderItemColumns.orderId, type: 'number' },
  { name: OrderItemColumns.productId, type: 'number' },
  { name: OrderItemColumns.tablePrice, type: 'number' },
  { name: OrderItemColumns.negotiatedPrice, type: 'number' },
  { name: OrderItemColumns.orderedWeightInGrams, type: 'number' },
  { name: OrderItemColumns.deliveredWeightInGrams, type: 'number' },
  { name: OrderItemColumns.estimatedProductTotalPrice, type: 'number' },
  { name: OrderItemColumns.productTotalPrice, type: 'number' },
  { name: OrderItemColumns.notes, type: 'string' },
  { name: OrderItemColumns.createdAt, type: 'number' },
  { name: OrderItemColumns.updatedAt, type: 'number' },
];

export const OrderItemTable = tableSchema({
  name: Tables.OrderItems,
  columns: OrderItemTableColumns,
});
