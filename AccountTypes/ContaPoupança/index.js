import { BasisAccount } from '../BasisAccount/index.js'

export class ContaPoupanca extends BasisAccount {
  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia)
  }
}
