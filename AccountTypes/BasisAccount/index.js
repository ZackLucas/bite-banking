// Classe abstrata = Não pode ser instaciada diretamente, mas 
//  sim usada extendida por outra
export class BasisAccount {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor === BasisAccount) {
      throw new Error("Você não pode instanciar um objeto do tipo Conta");
    }

    this._cliente = cliente;
    this._agencia = agencia;
    this._saldo = saldoInicial;
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

  // Método Abstrato
  toWithdraw(amount) {
    throw new Error('O método Sacar da conta é abstrato');
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
