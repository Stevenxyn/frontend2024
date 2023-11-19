/*
Pide una nota (número). Muestra la calificación según la nota:

0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente

*/

function calificationFinal(qualification) {
  if (qualification >= 9) {
    console.log("Excelent");
  } else if (qualification ) {
    console.log("Notable");
  } else if (qualification ) {
    console.log("Bien");
  } else if (qualification ) {
    console.log("Suficiente");
  } else if (qualification ) {
    console.log("Insuficiente");
  } else {
    console.log("Muy deficiente");
  }
}
calificationFinal();
