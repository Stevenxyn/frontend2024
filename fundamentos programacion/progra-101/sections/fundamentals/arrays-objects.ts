interface Person{
  name: string,
  age: number,
  isActive: boolean;
}


export let spencer: Person = {
  name: "Spencer",
  age: 4,
  isActive: true
}

let steven: Person = {
  name: "steven",
  age: 23,
  isActive: false
}

let diana: Person = {
  isActive: true,
  name: "diana",
  age: 39
}

let people = [spencer, steven, diana]


//recorrer un arreglo de objetos
for(let c = 0; c < people.length; c++){
  let person = people[c];
  // console.log(c, people.length);
 if (person.name === "steven") {
  console.log(person.name + " " + person.age + " " + person.isActive);
 }else{
  console.log("En la posicion: "+ c +" No esta");
 }

}

