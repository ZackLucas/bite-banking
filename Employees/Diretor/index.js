import { BasisEmployee } from "../BasisEmployee/index.js";

export class Diretor extends BasisEmployee {
  constructor(nome, salario, cpf) {
    super(nome, salario, cpf);
    this.bonificacao = 2;
  }
}
