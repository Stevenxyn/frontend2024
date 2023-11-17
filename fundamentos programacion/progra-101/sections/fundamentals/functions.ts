export function greet ( name: string = 'Por Defecto' ){
  console.log("Hola " + name);
}

greet('Steven');

//Cuando no enviamos ningun valor muestra el por defecto asignado en el argumento de la funcion
greet();

let userName = "El diavlo";
greet(userName);
