type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemIdade = { idade: number }

type Pessoa = TemNome & TemSobrenome & TemIdade

const pessoa: Pessoa = {
    nome: 'Paulo',
    sobrenome: 'Oliveira',
    idade: 21,
}

export { pessoa }