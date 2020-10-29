let x;

if (typeof x === 'undefined') x = 20;

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any, y: number) {
  if (typeof x === 'number') return x * y;
  return null;
}
const squareOfTwoNumber = squareOf(2, 2);
const squareOfTwoString = squareOf('teste', 2);

if (squareOfTwoNumber === null) {
  console.log('Conta invalida', squareOfTwoNumber * 2);
} else {
  console.log(squareOfTwoNumber);
}
