// ARRAY<Y> - T[]

export function multiplicarArgs(...args: Array<number>): number {
  return args.reduce((ac, val) => ac * val, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, val) => ac + val);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((item) => item.toUpperCase());
}

const result = multiplicarArgs(5, 9, 2);

const concatena = concatenaStrings('Paulo', ' ', 'tester');

const toUpper = toUpperCase('paulo', 'oliveira');

console.log(result);
console.log(concatena);
console.log(toUpper);
