import { ClientModel, database } from '@salesapp/database';
import type { Client, ClientWithoutId } from '@salesapp/types';
import { Tables } from '@salesapp/types';
import { ClientAbstract } from './Client.abstract';

class ClientClass implements ClientAbstract {
  async list(): Promise<Client[]> {
    const entries = await database
      .get<ClientModel>(Tables.Client)
      .query()
      .fetch();
    if (entries.length) {
      return entries.map<Client>(entry => ({
        id: entry.id,
        employee_id: entry.employee_id,
        company_name: entry.company_name,
        trade_name: entry.trade_name,
        taxpayer_id: entry.taxpayer_id,
        type: entry.type,
        buyer_first_name: entry.buyer_first_name,
        buyer_last_name: entry.buyer_last_name,
        phone: entry.phone,
        address: entry.address,
        number: entry.number,
        complement: entry.complement,
        zip_code: entry.zip_code,
        active: entry.active,
      }));
    }
    return [];
  }
  async get(id: string): Promise<Client> {
    const entry = await database
      .get<ClientModel>(Tables.Client)
      .find(String(id));
    const formattedEntry: Client = {
      id: entry.id,
      employee_id: entry.employee_id,
      company_name: entry.company_name,
      trade_name: entry.trade_name,
      taxpayer_id: entry.taxpayer_id,
      type: entry.type,
      buyer_first_name: entry.buyer_first_name,
      buyer_last_name: entry.buyer_last_name,
      phone: entry.phone,
      address: entry.address,
      number: entry.number,
      complement: entry.complement,
      zip_code: entry.zip_code,
      active: entry.active,
    };
    return formattedEntry;
  }
  async create(client: ClientWithoutId): Promise<Client> {
    const entry: Client = await database.write(async () => {
      const newUser: ClientModel = await database
        .get<ClientModel>(Tables.Client)
        .create(newEntry => {
          newEntry.employee_id = client.employee_id;
          newEntry.company_name = client.company_name;
          newEntry.trade_name = client.trade_name;
          newEntry.taxpayer_id = client.taxpayer_id;
          newEntry.type = client.type;
          newEntry.buyer_first_name = client.buyer_first_name;
          newEntry.buyer_last_name = client.buyer_last_name;
          newEntry.phone = client.phone;
          newEntry.address = client.address;
          newEntry.number = client.number;
          newEntry.complement = client.complement;
          newEntry.zip_code = client.zip_code;
          newEntry.active = client.active;
        });

      const formattedEntry: Client = {
        id: newUser.id,
        employee_id: newUser.employee_id,
        company_name: newUser.company_name,
        trade_name: newUser.trade_name,
        taxpayer_id: newUser.taxpayer_id,
        type: newUser.type,
        buyer_first_name: newUser.buyer_first_name,
        buyer_last_name: newUser.buyer_last_name,
        phone: newUser.phone,
        address: newUser.address,
        number: newUser.number,
        complement: newUser.complement,
        zip_code: newUser.zip_code,
        active: newUser.active,
      };
      return formattedEntry;
    });

    return entry;
  }
  async update(client: Client): Promise<Client> {
    const entry: ClientModel = await database
      .get<ClientModel>(Tables.Client)
      .find(String(client.id));
    await entry.update(updatedEntry => {
      updatedEntry.employee_id = client.employee_id;
      updatedEntry.company_name = client.company_name;
      updatedEntry.trade_name = client.trade_name;
      updatedEntry.taxpayer_id = client.taxpayer_id;
      updatedEntry.type = client.type;
      updatedEntry.buyer_first_name = client.buyer_first_name;
      updatedEntry.buyer_last_name = client.buyer_last_name;
      updatedEntry.phone = client.phone;
      updatedEntry.address = client.address;
      updatedEntry.number = client.number;
      updatedEntry.complement = client.complement;
      updatedEntry.zip_code = client.zip_code;
      updatedEntry.active = client.active;
    });

    const formattedEntry: Client = {
      id: entry.id,
      employee_id: entry.employee_id,
      company_name: entry.company_name,
      trade_name: entry.trade_name,
      taxpayer_id: entry.taxpayer_id,
      type: entry.type,
      buyer_first_name: entry.buyer_first_name,
      buyer_last_name: entry.buyer_last_name,
      phone: entry.phone,
      address: entry.address,
      number: entry.number,
      complement: entry.complement,
      zip_code: entry.zip_code,
      active: entry.active,
    };
    return formattedEntry;
  }
  async delete(id: string): Promise<void> {
    await database.write(async () => {
      const entry = await database
        .get<ClientModel>(Tables.Client)
        .find(String(id));
      await entry.destroyPermanently();
    });
  }
}

export const ClientService = new ClientClass();
