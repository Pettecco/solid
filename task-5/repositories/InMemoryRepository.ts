import Client from '../entities/Client';
import IClientRepository from './interfaces/IClientRepository';

export default class InMemoryRepository implements IClientRepository {
  private db: Client[];

  constructor() {
    this.db = [];
  }

  addClient(client: Client) {
    this.db.push(client);
  }

  listClients() {
    return this.db;
  }
}
