import { Cliente } from './Cliente/index.js';
import { ContaCorrente } from './ContaCorrente/index.js';

const cliente1 = new Cliente('Lucas', 12345678910);
const cliente2 = new Cliente('Rodrigo', 10987654321);

const contaCorrenteLucas = new ContaCorrente(1234, cliente1);
contaCorrenteLucas.deposit(500);
const conta2 = new ContaCorrente(1234, cliente2);

let amount = 200;
contaCorrenteLucas.transfer(amount, conta2);

console.log(ContaCorrente.numberOfAccounts);
