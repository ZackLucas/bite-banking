import { Cliente } from "../Cliente/index.js";

export class ContaCorrente {
  static numberOfAccounts = 0;
  agencia;
  
  #saldo = 0;
  #cliente;

  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numberOfAccounts += 1;
  }

  // Acessores
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this.#cliente = novoValor;
    }
  }

  get cliente() {
    return this.#cliente;
  }

  get saldo() {
    return this.#saldo;
  }

  // Métodos
  toWithdraw(amount) {
    if (this.#saldo < amount) {
      return;
    }

    this.#saldo -= amount;
    return amount;
  }

  deposit(amount) {
    if (amount <= 0) {
      return;
    }

    return (this.#saldo += amount);
  }

  transfer(amount, account) {
    if (amount <= 0) {
      return;
    }

    const amountWithdrawn = this.toWithdraw(amount);
    account.deposit(amountWithdrawn);
  }
}
