/*
 + public
 - private
 # protected
*/
export class Escritor {
  private _tool: Tool | null = null;
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log('Não pode escrever sem ferramenta');
      return;
    }

    this.tool.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  abstract write(): void;
}

export class Pencil extends Tool {
  write(): void {
    console.log(`${this.name} está escrevendo...`);
  }
}

export class Typewriter extends Tool {
  write(): void {
    console.log(`${this.name} está digitando...`);
  }
}

const escritor = new Escritor('Luiz');
const pencil = new Pencil('bic');
const typewriter = new Typewriter('datilografo');

console.log(escritor.name);
console.log(pencil.name);
console.log(typewriter.name);

escritor.tool = pencil;
escritor.write();

escritor.tool = typewriter;
escritor.write();
