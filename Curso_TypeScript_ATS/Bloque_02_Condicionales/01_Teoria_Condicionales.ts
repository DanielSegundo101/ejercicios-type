import promptSync from "prompt-sync";
const leer = promptSync();

console.log("--- SISTEMA DE ACCESO A COMPRAS ---");

let edad: number = Number(leer("Digite su edad: "));
let tieneMembresia: string = leer("¿Tiene membresía VIP? (si/no): ");

// Usamos if con el operador lógico && (AND)
if (edad >= 18 && tieneMembresia === "si") {
    console.log("\n¡Acceso concedido! Tienes descuentos VIP.");
} else if (edad >= 18 && tieneMembresia === "no") {
    console.log("\nAcceso concedido como cliente regular.");
} else {
    console.log("\nAcceso DENEGADO. Eres menor de edad.");
}