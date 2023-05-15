import { OrderColumns, OrderItemColumns, Tables } from '@salesapp/types';
import { Model, Q, Query } from '@nozbe/watermelondb';
import {
  children,
  date,
  field,
  readonly,
  relation,
  text,
  lazy,
} from '@nozbe/watermelondb/decorators';
import { Associations } from '@nozbe/watermelondb/Model';
import { OrderItemsModel } from './OrderItems.model';

export class OrdersModel extends Model {
  static table = Tables.Orders;
  public static associations: Associations = {
    [Tables.OrderItems]: {
      type: 'has_many',
      foreignKey: OrderItemColumns.orderId,
    },
    [Tables.Client]: {
      type: 'belongs_to',
      key: OrderColumns.clientId,
    },
  };

  @field(OrderColumns.serverId) server_id!: number;
  @field(OrderColumns.clientId) client_id: number;
  @field(OrderColumns.estimatedOrderPrice) estimated_order_price: number;
  @field(OrderColumns.orderTotalPrice) order_total_price!: number;
  @text(OrderColumns.status) status: string;

  @readonly @date(OrderColumns.createdAt) created_at: number;
  @readonly @date(OrderColumns.updatedAt) updated_at: number;

  @children(Tables.OrderItems) order_items: Query<OrderItemsModel>;

  @relation(Tables.Client, OrderColumns.clientId)
  client: Query<OrdersModel>;

  @lazy items = this.collections
    .get(Tables.Orders)
    .query(Q.on(Tables.OrderItems, 'order_id', this.server_id));
}
