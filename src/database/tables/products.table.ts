import { ColumnType, tableSchema } from '@nozbe/watermelondb';
import { Tables, ProductColumns } from '@salesapp/types';

type ProductTableColumnsType = {
  name: ProductColumns;
  type: ColumnType;
};

const ProductTableColumns: ProductTableColumnsType[] = [
  { name: ProductColumns.serverId, type: 'number' },
  { name: ProductColumns.name, type: 'string' },
  { name: ProductColumns.price, type: 'number' },
  { name: ProductColumns.category, type: 'string' },
  { name: ProductColumns.type, type: 'string' },
  { name: ProductColumns.createdAt, type: 'number' },
  { name: ProductColumns.updatedAt, type: 'number' },
];

export const ProductTable = tableSchema({
  name: Tables.Products,
  columns: ProductTableColumns,
});
