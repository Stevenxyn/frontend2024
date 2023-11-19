/*
Pide la edad y si es mayor de 18 años indica que ya puede conducir.
*/


function ageValidator(age){
  if ( age >= 18 ){
    console.log("You can drive.");
  }else{
    console.log("You can't drive");
  }
}

ageValidator(17);

