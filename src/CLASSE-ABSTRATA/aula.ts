/*
 Classes criadas para extender podem ser abstratas, para outras classes herdar suas props e metodos
 ela não pode ser mais intanciadas diretamente, apenas por subclasses que são classes concretas

 ela cria um tipo, portanto pode ser extendida e todos os seus métodos estarão disponiveis nas subclasses

 Métodos ou atributos abstratos não precisam de um corpo, ao criar, cada subclasse deverá criar o corpo
 do método ou valor da prop
*/
export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected atack: number,
    protected life: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.atack);
  }

  perderVida(forcaAtaque: number): void {
    this.life -= forcaAtaque;
    console.log(
      `${this.emoji}-${this.nome} agotem tem ${this.life} de vida...`,
    );
  }
  /* Métodos abstratos não possuem corpo, pois é só um contrato
    todas as subclasses dessa classe devem ter o método bordão
  */
  abstract bordao(): void;
}

class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + 'Brilho de beleza');
  }
}

class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + 'Uliro master');
  }
}

const guerreira = new Guerreira('Sasha', 47, 500);
const monstro = new Monstro('Liro', 53, 470);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
