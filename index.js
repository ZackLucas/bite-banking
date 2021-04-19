import { Auth } from './Auth/index.js';
import { Cliente } from './Cliente/index.js';
import { Diretor } from './Employees/Diretor/index.js';
import { Manager } from './Employees/Manager/index.js';

const diretor = new Diretor('Rodrigo', 10000, 12345678910);
diretor.registerPwd('123456789');

const manager = new Manager('Luiz', 6000, 98765432101);
manager.registerPwd('123')

const diretorStatus = Auth.login(diretor, '123456789');
const managerStatus = Auth.login(manager, '123');

console.log(diretorStatus);
console.log(managerStatus);


const cliente = new Cliente('Lucas', 75678912310, 456);
const clienteStatus = Auth.login(cliente, 456);

console.log(clienteStatus)