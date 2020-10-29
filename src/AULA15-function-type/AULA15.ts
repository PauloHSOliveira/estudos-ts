type Calculator = (a: number, b: number) => number

type MapString = (item: string) => string

const test: Calculator = (a, b) => {
    return a + b
}

const returnArray = (array: string[], callbackFn: MapString): string[] => {
    const newarray: string[] = []
    for (let a = 0; a < array.length; a++) {
        newarray.push(callbackFn(array[a]))
    }
    return newarray
}
console.log(test(2, 4))
const a = ['a', 'b', 'c']

console.log(returnArray(a, (item) => item.toUpperCase()))
export { test }