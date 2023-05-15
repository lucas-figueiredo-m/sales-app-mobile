import { Model, associations } from '@nozbe/watermelondb';
import {
  date,
  field,
  immutableRelation,
  readonly,
  text,
} from '@nozbe/watermelondb/decorators';

import {
  Tables,
  ProductColumns,
  OrderItemColumns,
  HistoricalProductPriceColumns,
  OrderItem,
  HistoricalProductPrice,
} from '@salesapp/types';
import { Associations } from '@nozbe/watermelondb/Model';

export class ProductModel extends Model {
  static table = Tables.Products;

  public static associations: Associations = associations(
    [
      Tables.OrderItems,
      { type: 'has_many', foreignKey: OrderItemColumns.productId },
    ],
    [
      Tables.HistoricalProductPrice,
      { type: 'has_many', foreignKey: HistoricalProductPriceColumns.productId },
    ],
  );

  @field(ProductColumns.name) name!: string;
  @text(ProductColumns.serverId) server_id!: number;
  @text(ProductColumns.price) price!: number;
  @text(ProductColumns.category) category!: string;
  @text(ProductColumns.type) type!: string;
  @readonly @date(ProductColumns.createdAt) created_at: number;
  @readonly @date(ProductColumns.updatedAt) updated_at: number;

  @immutableRelation(Tables.OrderItems, OrderItemColumns.productId)
  order_items: OrderItem;
  @immutableRelation(
    Tables.HistoricalProductPrice,
    HistoricalProductPriceColumns.productId,
  )
  historical_product_price: HistoricalProductPrice;
}
