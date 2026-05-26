import PromptSync from "prompt-sync";
const leer = PromptSync();

let precioDeProduccion: number = Number (leer('Cuanto te cuesta producirlo?'));
let ganancias: number = Number(leer('Cuantas ganancias obtuviste?'));

let precioBase: number = ganancias + precioDeProduccion;
const IVA: number = 0.16;
let montoIva: number = precioBase * IVA;
let PrecioFinal: number = montoIva* precioBase;

console.log(`Precio Original: ${precioBase}`);
console.log(`Monto de iva(16%):${IVA}`)
console.log(`Precio Final: ${PrecioFinal}`)



