/*
Realizar un programa que muestre la nota del alumno como: A, B, C, D F donde:

A >= 90
B >= 80
C >= 70
D >= 60
F < 60
*/

export function finalGrade(grade:number) {
  if (grade >= 90) {
    console.log("Tu nota es: A");
  } else if (grade >= 80) {
    console.log("Tu nota es: B");
  } else if (grade >= 70) {
    console.log("Tu nota es: C");
  }else if (grade >= 60) {
    console.log("Tu nota es: D");
  }else{
    console.log("Tu nota es: F");
  }
}

finalGrade(60);
