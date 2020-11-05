export class Pessoa {
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
