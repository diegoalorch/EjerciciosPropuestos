/*
***** El codigo "prompt" sirve para ingresar 
      un nombre u varible por el teclado y 
      "Math.squrt" para hacer raiz *****

var x = prompt("N: ");
document.write("La raiz es: ", Math.sqrt(x));
*/

/*
Operación:
1. Suma
2. Resta
3. Multiplicación
4. División
5. Raiz cúbica
6. Factorial
7. Potencia
*/

/*
***** Esquema de mayor a menor *****

var x1 = prompt("Numero 1: ");
var x2 = prompt("Numero 2: ");
if (x1 > x2) {
    console.log("Mayor es: ", x1);
}else{
    console.log("Mayor es: ", x2);
}
*/

    /* *** Operadores Menu *** 
Definición de variables */

var opcion = parseInt(prompt("Escoja Opcion: "));
var x = 0, y =0;

/* ****** Funciones ****** */
function suma() {
    return (parseInt(x) + parseInt(y));
}
function resta(){
    return(parseInt(x) - parseInt(y));
}
function Multiplicación() {
    return (parseInt(x) * parseInt(y));
}
function division() {
    if (y >= 1) {
        return (parseInt(x) / parseInt(y));
    }else{
        return 0;
    }
}
function cubica() {
    return Math.sqrt(parseInt(a), 1/3);
}
function Factorial() {
    let i, s=1;
    for (i=1, i<x+1; i++;){
        s*=i;
    }
    return s;
}
function potencia() {
    return x*x;
}
function datos1() {
    x = prompt("Numero 1: ");
    y = prompt("Numero 2: ");
}
function datos2() {
    x = Number(prompt("Numero 1: "));
}

switch (opcion) {
    case 1:datos1();
        document.write("La suma es: ",suma(x,y));
        break;
    case 2:datos1();
        document.write("La resta es: ", resta(x,y));
        break;
    case 3:datos1();
        document.write("La multiplicación es: ", Multiplicación(x,y));
        break;
    case 4:datos1();
        document.write("La división es: ", division(x,y));
        break;
    case 5:datos1();
        document.write("El Factorial es: ", Factorial(x));
        break;
    default:
        break;
}