// Type anotations
export {}; // fix - {Cannot redeclare block-scoped variable 'name'}
// Typos básicos (aqui ocorre inferência de tipos)
const name: string = 'Paulo';
const age: number = 21;
const adult: boolean = true;
const symbol: symbol = Symbol('simbolo');
// *********************************************

// Arrays
const arrayOfNumbers: Array<number> = [1, 2, 3];
const arrayOfNumbers2: number[] = [1, 2, 3];

const arrayOfStrings: Array<string> = ['Paulo', 'Ana', 'Carla'];
const arrayOfStrings2: string[] = ['a', 'b'];
// *********************************************

// Objetos
const account: { name: string; age: number; adult?: boolean } = {
  name: 'Paulo',
  age: 21,
};

console.log(account.name);
// *********************************************

// Funções

function soma(x: number, y: number) {
  return x + 1;
}
const result = soma(2, 2);

interface Soma {
  (x: number, y: number): number;
}

const soma2: Soma = (x, y) => x + y;
const result2 = soma2(1, 2);
