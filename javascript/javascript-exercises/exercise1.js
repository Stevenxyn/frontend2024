/*
Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.

Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.
*/
let priceProduct = 100;
let iva = 21;


// priceProduct + (priceProduct * iva)

let totalPrice = priceProduct + (priceProduct * iva) / 100;

console.log("El precio total con iva es de: ",totalPrice);
