import PromptSync from "prompt-sync";
const leer = PromptSync();

let a: number = Number(leer("Digite el Primer numero: "))
let b: number = Number(leer("Digite el Segundo numero: "));

let suma: number = a + b;
let resta: number = a - b;
let multiplicacion: number = a * b;
let divicion: number = a / b;

console.log('-----[RESULTADOS]--------')
console.log(`suma: ${suma}`);
console.log(`resta: ${resta}`);
console.log(`multiplicacion: ${multiplicacion}`);
console.log(`divicion: ${divicion}`)