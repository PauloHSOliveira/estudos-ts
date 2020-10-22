function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Paulo',
  sobrenome: 'Oliveira',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Paulo', 'Oliveira');
pessoa.exibirNome();
