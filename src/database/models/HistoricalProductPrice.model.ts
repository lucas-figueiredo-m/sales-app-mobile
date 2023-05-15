import { HistoricalProductPriceColumns, Tables } from '@salesapp/types';
import { Model } from '@nozbe/watermelondb';
import { date, field, readonly } from '@nozbe/watermelondb/decorators';

export class HistoricalProductPrice extends Model {
  static table = Tables.HistoricalProductPrice;

  @field(HistoricalProductPriceColumns.serverId) server_id!: number;
  @field(HistoricalProductPriceColumns.productId) product_id: number;
  @field(HistoricalProductPriceColumns.price) price: number;
  @readonly @date(HistoricalProductPriceColumns.createdAt) created_at: number;
  @readonly @date(HistoricalProductPriceColumns.updatedAt) updated_at: number;
}
