import { BasisAccount } from '../BasisAccount/index.js'

export class ContaPoupanca extends BasisAccount {
  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia)
  }

  toWithdraw(valor) {
    const feeToPay = 1.02;
    return this._toWithdraw(valor, feeToPay);
  }
}
