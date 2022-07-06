//Punto 8
let n1 = prompt("Escribe un número");
if (n1 % 2 === 0) {
document.write("Es divisible por 2");
} else {
document.write("No es divisible por 2");
}

document.write("<br>")

//Punto 10
let numero1 = prompt("Escribe un número");
if (numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0) {
document.write("Es divisible por 2, 3, 5 o 7");
} else {
document.write("No es por 2, 3, 5, 7");
}

document.write("<br>")

//Punto 11
let primero = prompt("Escribe un número");
if (primero % 2 === 0 || primero % 3 === 0 || primero % 5 === 0 || primero % 7 === 0) {
if (primero % 2 === 0) {
document.write("Es divisible por 2. ");
}
if (primero % 3 === 0) {
document.write("Es divisible por 3. ");
}
if (primero % 5 === 0) {
document.write("Es divisible por 5. ");
}
if (primero % 7 === 0) {
document.write("Es divisible por 7. ");
}
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}