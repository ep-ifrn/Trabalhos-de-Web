export class Contato {
  private _nome: string;
  private _telefone: string;
  private _email: string;
  private _aniversario: string;
  private _tipo: string;

  constructor(nome: string, telefone: string, email: string, aniversario: string, tipo: string) {
    this._nome = nome;
    this._telefone = telefone;
    this._email = email;
    this._aniversario = aniversario;
    this._tipo = tipo;
  }

  get nome(): string { return this._nome; }
  set nome(valor: string) { this._nome = valor; }

  get telefone(): string { return this._telefone; }
  set telefone(valor: string) { this._telefone = valor; }

  get email(): string { return this._email; }
  set email(valor: string) { this._email = valor; }

  get aniversario(): string { return this._aniversario; }
  set aniversario(valor: string) { this._aniversario = valor; }

  get tipo(): string { return this._tipo; }
  set tipo(valor: string) { this._tipo = valor; }
}