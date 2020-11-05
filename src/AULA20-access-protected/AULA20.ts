export class Empresa {
  public readonly name: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

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

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '000.009.009/0001-00');
  }
  popColaborador(): Colaborador | null {
    /*
      Para ter acesso ao atributo da classe pai através da sub classe e ainda manter o atributo
      encapsulado(sem acesso fora da classe) utilizamos o private
    */
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly name: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
const colab1 = new Colaborador('Paulo', 'Oliveira');

empresa1.pushColaborador(colab1);
empresa1.pushColaborador({ name: 'Mark', sobrenome: 'Zuckerberg' });
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1);
empresa1.showColaboradores();
