//Primer punto
alert ("Un mensaje");

//Segundo punto
document.write("<h1>Hello World</h1>");

//Tercer punto
document.write("Resultado:" + (3+5) + "<hr>");

//Cuarto punto
let nombre = prompt("Escribe tu nombre");
document.write("Hola: "+ nombre + "<hr>"); 

//Quinto punto
let primero1 = prompt("Escribe un número");
let segundo2 = prompt("Escribe otro número");
document.write("El resultado es: "+ ( parseInt(primero1)+ parseInt(segundo2) ) + "<hr>" );

//Sexto punto
let numero1 = prompt("Escribe un número");
let numero2 = prompt("Escribe otro número" );
if (numero1 > numero2) {
document.write(numero1);
} else {
document.write(numero2);
}

document.write("<br>")

//Punto Siete
let n1 = prompt("Escribe un número");
let n2 = prompt("Escribe otro número");
let n3 = prompt("Escribe otro número");
if (n1 > n2 == n1 > n3) {
document.write(n1);
} else if (n2 > n3) {
document.write(n2);
} else {
document.write(n3);
}

document.write("<br>")

//Punto 9

let frase = prompt("Ingrese su frase de hasta 7 caracteres");
    console.log(frase);
    console.log(frase.length)

    //hola mundo

   if(frase.charAt(0) === "a" || frase.charAt(0) === "e" || frase.charAt(0) === "i" || frase.charAt(0) === "o" || frase.charAt(0) === "u"){
      document.write(frase.charAt(0))
    }

    if(frase.charAt(1) === "a" || frase.charAt(1) === "e" || frase.charAt(1) === "i" || frase.charAt(1) === "o" || frase.charAt(1) === "u"){
      document.write(frase.charAt(1))
    }

    if(frase.charAt(2) === "a" || frase.charAt(2) === "e" || frase.charAt(2) === "i" || frase.charAt(2) === "o" || frase.charAt(2) === "u"){
      document.write(frase.charAt(2))
    }

    if(frase.charAt(3) === "a" || frase.charAt(3) === "e" || frase.charAt(3) === "i" || frase.charAt(3) === "o" || frase.charAt(3) === "u"){
      document.write(frase.charAt(3))
    }

    

