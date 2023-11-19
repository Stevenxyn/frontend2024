export let person = {
  name: "Spencer",
  age: 4,
  isActive: true,
  hobbies: ["sleep", "eat", "play"],
  //Create a personal method
  toString() {
    let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
    console.log(objectString);
  }

}

//call only the name console.log(person.name.toUpperCase());
//call the personal method person.toString();


//Exercises
let car = {
  brand: "BMW",
  model: "M2 Competition",
  year: 2019,
  isSold: true,
  singleOwner: false,
  price: 210000000
}

let smartTV = {
  brand: "LG",
  model: "Premiu 2k",
  isSmartTV: true,
  inch: 50,
  price: 2000000
}

let youtubeVideo = {
  author: "Cry cigarettes after sex",
  format: "MP4",
  CC: true,
  isOfficialVideo: false,
  isOfficialChanel: false,
  hasAds: true
}

console.log(car);
console.log(smartTV);
console.log(youtubeVideo);
