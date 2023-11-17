export let employees = ["Jose", "pepe", "steven", "gerardo", "Mateo","Diana"];
export let salaries = [1500, 250, 3500, 4500, 2500,4500];

export let flowers = ["Rosa", "Girasol", "Lirio", "clavel"];

/*
for(let i = 0; i < flowers.length; i++){
  console.log(flowers[i]);
}
*/

  for(let i = 0; i < employees.length; i++){
    console.log( i, employees[i] + " Tiene un salario de: " + salaries[i]);
  }

