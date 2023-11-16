export let healtHero = 10;

//en el ciclo do while a diferencia del while normal es que aca SIEMPRE hara una ejecucion porque primero dice haz esto(o sea lo que tenemos entre los {} y despues valida la condicion) siempre ejecuta primero la prueba y despues valida la condicion
do {
  console.log("Tienes aun vida", healtHero);

  healtHero--;
} while (healtHero >= 0)

console.log("Game over!");

