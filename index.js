import { Cliente } from './Cliente/index.js';
import { ContaCorrente } from './AccountTypes/ContaCorrente/index.js';
import { ContaPoupanca } from './AccountTypes/ContaPoupança/index.js';

const cliente1 = new Cliente('Lucas', 12345678910);

const contaCorrenteLucas = new ContaCorrente(0, cliente1, 1001);
contaCorrenteLucas.deposit(500);
contaCorrenteLucas.toWithdraw(100)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.toWithdraw(10);

console.log(contaCorrenteLucas);
console.log(contaPoupanca);