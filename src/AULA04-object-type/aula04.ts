const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown; // Index signature
} = {
  keyA: 'a',
  keyB: 'b',
};

objectA.keyB = 'c';
objectA.keyC = 'a';

console.log(objectA);
