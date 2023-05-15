import { OrderItemColumns, Tables } from '@salesapp/types';
import { associations, Model, Relation } from '@nozbe/watermelondb';
import {
  date,
  field,
  readonly,
  relation,
  text,
} from '@nozbe/watermelondb/decorators';
import { Associations } from '@nozbe/watermelondb/Model';
import { OrdersModel } from './Orders.model';

export class OrderItemsModel extends Model {
  static table = Tables.OrderItems;

  public static associations: Associations = associations([
    Tables.Orders,
    { type: 'belongs_to', key: OrderItemColumns.orderId },
  ]);

  @field(OrderItemColumns.serverId) server_id!: number;
  @field(OrderItemColumns.orderId) order_id: number;
  @field(OrderItemColumns.productId) product_id: number;
  @field(OrderItemColumns.tablePrice) table_price: number;
  @field(OrderItemColumns.negotiatedPrice) negotiated_price: number;
  @field(OrderItemColumns.orderedWeightInGrams) ordered_weight_in_grams: number;
  @field(OrderItemColumns.deliveredWeightInGrams)
  delivered_weight_in_grams!: number;
  @field(OrderItemColumns.estimatedProductTotalPrice)
  estimated_product_total_price: number;
  @field(OrderItemColumns.productTotalPrice) product_totalPrice!: number;
  @text(OrderItemColumns.notes) notes!: string;

  @readonly @date(OrderItemColumns.createdAt) created_at: number;
  @readonly @date(OrderItemColumns.updatedAt) updated_at: number;

  @relation(Tables.Orders, OrderItemColumns.orderId)
  order_items: Relation<OrdersModel>;
}
