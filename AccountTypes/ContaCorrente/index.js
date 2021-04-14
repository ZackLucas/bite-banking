import { BasisAccount } from '../BasisAccount/index.js'

export class ContaCorrente extends BasisAccount {
  static numberOfAccounts = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    ContaCorrente.numberOfAccounts += 1;
  }

  teste() {
    super.teste();
    console.log("teste na classe conta corrente");
  }

  toWithdraw(valor) {
    const feeToPay = 1.1;

    return this._toWithdraw(valor, feeToPay)
  }
}
