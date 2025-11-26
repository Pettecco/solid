import Client from '../../entities/Client';

interface IClientRepository {
  addClient(client: Client): void;
  listClients(): Client[] | Promise<Client[]>;
}

export default IClientRepository;
