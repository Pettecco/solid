import ClientController from './controller/ClientController';
import Client from './entities/Client';
import PostgresRepository from './repositories/PostgresRepository';

const clientController = new ClientController(new PostgresRepository());

const client1 = new Client(0, 'João', 'joao@mail.com');
const client2 = new Client(1, 'Kleber', 'kleber@mail.com');

clientController.addClient(client1);
clientController.addClient(client2);

console.log(clientController.listClients());
