import { Model } from '@nozbe/watermelondb';
import { date, field, readonly, text } from '@nozbe/watermelondb/decorators';

import { Tables, ClientColumns } from '@salesapp/types';

export class ClientModel extends Model {
  static table = Tables.Client;

  @field(ClientColumns.employeeId) employee_id: number;
  @field(ClientColumns.serverId) server_id!: number;
  @text(ClientColumns.companyName) company_name: string;
  @text(ClientColumns.tradeName) trade_name: string;
  @text(ClientColumns.taxpayerId) taxpayer_id: string;
  @field(ClientColumns.type) type: string;
  @text(ClientColumns.buyerFirstName) buyer_first_name: string;
  @text(ClientColumns.buyerLastName) buyer_last_name: string;
  @text(ClientColumns.phone) phone: string;
  @text(ClientColumns.address) address: string;
  @field(ClientColumns.number) number: string;
  @text(ClientColumns.complement) complement!: string;
  @text(ClientColumns.zipCode) zip_code: string;
  @field(ClientColumns.active) active: boolean;
  @readonly @date(ClientColumns.createdAt) created_at: number;
  @readonly @date(ClientColumns.updatedAt) updated_at: number;
}
