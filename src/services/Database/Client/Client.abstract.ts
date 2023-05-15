import type { Client, ClientWithoutId } from '@salesapp/types';

export abstract class ClientAbstract {
  abstract list(): Promise<Client[]>;
  abstract get(id: Client['id']): Promise<Client>;
  abstract create(client: ClientWithoutId): Promise<Client>;
  abstract update(client: Client): Promise<Client>;
  abstract delete(id: Client['id']): Promise<void>;
}
