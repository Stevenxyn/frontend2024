/*
export let tableNumber = 5;
export let tableEnd = 100;

*/
export function printTableMultiplication(base: number, limite: number = 10) {
 /*
  if ( limite <= 0) {
    throw new Error("El limite debe ser mayor a 0");
    
  }
 */
  if ( limite <= 0) {limite = 10;}
  
  for (let i = 1; i <= limite; i++) {
    console.log(base, " X ", i, " = ", base * i);

  }
}


printTableMultiplication(5,-1);

