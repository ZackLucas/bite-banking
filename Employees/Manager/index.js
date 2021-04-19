import { BasisEmployee } from "../BasisEmployee/index.js";

export class Manager extends BasisEmployee {
  constructor(nome, salario, cpf) {
    super(nome, salario, cpf);
    this._bonificacao = 1.1;
  }
}
