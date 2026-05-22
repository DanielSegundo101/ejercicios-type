import PromptSync from "prompt-sync";
const leer = PromptSync();

let horasTRabajadas: number = 0;
let gananciasPorHoras: number = 0;
let gananciasTotal: number = 0;

horasTRabajadas = Number(leer('Cuantas horas trabajaste: '));
gananciasPorHoras = Number(leer('Cuanto se gana por hora repartiendo: '));

gananciasTotal = horasTRabajadas * gananciasPorHoras;

console.log(`Estas son tus ganancias del dia: ${gananciasTotal}`)
