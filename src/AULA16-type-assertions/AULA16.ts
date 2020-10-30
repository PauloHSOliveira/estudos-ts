/* Recomendado*/
//Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non-null assertion (!)
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'black';

// HTML Element
const input = document.querySelector('input') as HTMLInputElement;
input.value = 'Teste';
input.focus();

/* Não recomendado */
const body2 = document.querySelector('body')!;
body2.style.background = 'blue';

// Type assertion
const body4 = (document.querySelector('body') as unknown) as number;
