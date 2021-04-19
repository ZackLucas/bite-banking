/*
    Ser autenticavel significa ter o método autenticar
*/

export class Auth {
  static login(authenticable, password) {
    if (Auth.isAuthetincable(authenticable)) {
      return authenticable.authenticate(password);
    }

    return false;
  }

  static isAuthetincable(authenticable) {
    return (
      "authenticate" in authenticable &&
      authenticable.authenticate instanceof Function
    );
  }
}
