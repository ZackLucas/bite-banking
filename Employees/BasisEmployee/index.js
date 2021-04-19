export class BasisEmployee {
  constructor(nome, salario, cpf) {
    this._nome = nome;
    this._salario = salario;
    this._cpf = cpf;

    this._bonificacao = 1;
    this._pwd;
  }

  authenticate(senha) {
    return this._pwd === senha;
  }

  registerPwd(password) {
    this._pwd = password;
  }
}
