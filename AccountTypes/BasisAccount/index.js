export class BasisAccount {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  // Acessores
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  // Métodos
  toWithdraw(amount) {
    const feeToPay = 1;
    return this._toWithdraw(amount, feeToPay);
  }

  _toWithdraw(amount, feeToPay) {
    const valorSacado = feeToPay * amount;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  deposit(amount) {
    if (amount <= 0) {
      return;
    }

    return (this._saldo += amount);
  }

  transfer(amount, account) {
    if (amount <= 0) {
      return;
    }

    const amountWithdrawn = this.toWithdraw(amount);
    account.deposit(amountWithdrawn);
  }

  teste() {
    console.log("teste na classe conta");
  }
}
