export class Empresa {
  public readonly name: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  pushColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  showColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly name: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Facebook', '000.009.009/0001-00');
const colab1 = new Colaborador('Paulo', 'Oliveira');

empresa1.pushColaborador(colab1);
empresa1.pushColaborador({ name: 'Mark', sobrenome: 'Zuckerberg' });

console.log(empresa1);
empresa1.showColaboradores();
