import { OrderItemsModel } from '@salesapp/database';
import { Tables } from '@salesapp/types';
import { Q } from '@nozbe/watermelondb';
import { DatabaseService } from '../Database';
import { OrderItemsAbstract } from './OrderItems.abstract';

class OrderItemsClass implements OrderItemsAbstract {
  constructor(private database: typeof DatabaseService) {}

  async getItemsFromOrderId(orderId: number) {
    return this.database.database
      .get<OrderItemsModel>(Tables.OrderItems)
      .query(Q.where('order_id', orderId))
      .fetch();
  }
}

export const OrderItemsService = new OrderItemsClass(DatabaseService);
