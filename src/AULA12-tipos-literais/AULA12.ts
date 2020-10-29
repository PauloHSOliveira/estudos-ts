let brabo: 'Paulo'

console.log(brabo)


const genioChave = {
    name: 'Paulo' as const,
    sobrenome: 'Oliveira'
}

genioChave.sobrenome = 'O brabo'

function setColor(cor: 'Azul' | 'Vermelho' | 'Verde') {
    return cor
}

console.log(setColor('Azul'))

// Module mode
export default 1