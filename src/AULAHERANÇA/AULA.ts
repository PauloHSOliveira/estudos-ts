export class Pessoa {
  //Super classe - parents class
  constructor(
    public name: string,
    public lastnanme: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getCompleteName(): string {
    return `${this.name} ${this.lastnanme}`;
  }
}

//Sub Classes
export class Aluno extends Pessoa {
  constructor(
    name: string,
    lastnanme: string,
    age: number,
    cpf: string,
    public sala: string,
  ) {
    super(name, lastnanme, age, cpf); // se quiser adicionar um novo item ao objeto
    // chama os atribudos da classe pai e inicia os novos atribudos
  }

  getCompleteName(): string {
    console.log('Fazendo algo antes'); // Caso queira fazer algo antes sem mudar o comportamento do metodo
    const result = super.getCompleteName(); // da super classe, utilizamos o super
    return result + 'HEYYYYYYYYYYYYYYY';
  }
}
export class Cliente extends Pessoa {
  getCompleteName(): string {
    return `Cliente => ${this.name} ${this.lastnanme}`;
  }
}

const pessoa = new Pessoa('Paulo', 'Silveira', 21, '144.900.206-43');
const aluno = new Aluno('Paulo', 'Oliveira', 21, '144.900.206-43', '001');
const cliente = new Cliente('Paulo', 'Silveira', 22, '144.900.206-43');

console.log(aluno);
console.log(pessoa);
console.log(cliente);
