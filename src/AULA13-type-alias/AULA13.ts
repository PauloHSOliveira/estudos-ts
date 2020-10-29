type Idade = number
type Pessoa = {
    idade: Idade,
    name: string,
    salario: number
    corPreferida?: CorPreferida
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'

type CorPreferida = CorRGB | CorCMYK

const pessoa: Pessoa = {
    idade: 21,
    name: 'Paulo',
    salario: 1_000_0000,
    corPreferida: 'Azul'
}

export function setCorPreferida(pessoa: Pessoa, corPreferida: CorPreferida): Pessoa {
    return { ...pessoa, corPreferida }
}

console.log(setCorPreferida(pessoa, 'Preto'))

export { pessoa }