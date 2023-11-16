export let healtHero = 30;

while (healtHero >= 0) {
  console.log("Tienes aun vida", healtHero);
  if (healtHero === 10) {
    console.log("CUIDADO TIENES 10 DE VIDA!");
  }else if( healtHero === 3){
    console.log("Estas a punto de morir....");
  }
  healtHero--;
}
console.log("Game over!");
