for (let i = 1; i <=10; i++){
  console.log("let i: ", i);

  if (i === 4) {
    console.log("Vas por el numero 4");
    continue;
  }

  //Con esta condicion rompemos el ciclo y hacemos que termine
  if (i === 5) {
    break;
  }
}

console.log("El ciclo termino");
