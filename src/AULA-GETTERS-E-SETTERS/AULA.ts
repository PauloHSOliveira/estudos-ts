export class Pessoa {
  //Super classe - parents class
  constructor(
    private name: string,
    private lastnanme: string,
    private age: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf; // call setter
  }

  // setter
  set cpf(value: string) {
    console.log('CALL SETTER');
    this._cpf = value;
  }
  // getter
  get cpf(): string {
    console.log('CALL GETTER');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Paulo', 'Silveira', 22, '144.900.206-43');
const pessoa2 = new Pessoa('Teste', 'Oliveira', 22, '444.898.784-78');

pessoa.cpf = '188.998.999.00'; // replace value using setter
console.log(pessoa.cpf); // show value by getter

console.log(pessoa2.cpf); // call person 2 with 1 setter

// Maximum call stack size exceeded / stack overflow
// resolved change this.cpf to this._cpf
