export class Cliente {
  constructor(nome, cpf, password) {
    this.nome = nome;
    this._cpf = cpf;
    this._pwd = password;
  }

  get cpf() {
    return this._cpf;
  }

  authenticate(password) {
    return this._pwd === password;
  }
}
