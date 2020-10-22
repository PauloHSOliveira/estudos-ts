// tuple
const dadosCliente: readonly [number, string] = [1, 'Luiz']; // Apenas leitura - Imutável
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Paulo'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz'];

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readonly array
const array: readonly string[] = ['Paulo', 'Blu', 'teco'];
const array2: ReadonlyArray<string> = ['Paulo', 'Blu', 'teco'];

console.log(array);
console.log(array2);
