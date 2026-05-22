import promptSync = require('prompt-sync');
const leer = promptSync();

let producto: string = "Teclado Mecánico";
let precio: number = 1500.50;
let hayStock: boolean = true;

console.log("--- DATOS DEL SISTEMA ---");
console.log(`Producto: ${producto}`);
console.log(`Precio: $${precio}`);
console.log(`¿Disponible?: ${hayStock}`);

console.log("\n--- INGRESO DE DATOS ---");

let nuevoUsuario: string = leer("Digite su nombre de usuario: ");
let edadUsuario: number = Number(leer("Digite su edad: "));

console.log(`\nUsuario registrado: ${nuevoUsuario}, Edad: ${edadUsuario}`);