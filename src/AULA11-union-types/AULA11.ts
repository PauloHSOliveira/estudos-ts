function calculator(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') return a + b
    return `${a}${b}`
}

console.log(calculator(10, 15))
console.log(calculator('10', 'teste'))