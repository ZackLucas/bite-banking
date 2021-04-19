import { BasisAccount } from "../BasisAccount/index.js";

export class ContaSalario extends BasisAccount {
  constructor(cliente) {
    super(0, cliente, 100);
  }

  toWithdraw(valor) {
    const feeToPay = 1.01;
    return this._toWithdraw(valor, feeToPay);
  }
}
