import Client from '../entities/Client';
import InMemoryRepository from '../repositories/InMemoryRepository';
import IClientRepository from '../repositories/interfaces/IClientRepository';

export default class ClientController {
  constructor(private repository: IClientRepository) {}

  addClient(client: Client) {
    this.repository.addClient(client);
  }

  listClients() {
    return this.repository.listClients();
  }
}
