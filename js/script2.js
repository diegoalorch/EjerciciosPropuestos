/* **** Creación de Arrays **** */
var numeros=[]
var num_posi=[]
var num_nega=[]
var num_pares=[]
var num_impares=[]
/* **** Fin de creación de Arrays **** */

/* **** Continuar varias veces y designar todos los numeros **** */
function designar_numero() {
    var num=(prompt("Ingrese un numero: "));
    while (num != "no") {
        numeros.push(parseInt(num));
        num=(prompt("Ingrese otro numero si de sea continuar y NO si no desea continuar: "));
        console.log(numeros);
    }
    /* **** Fin de continuar varias veces **** */

    /* ***** For de como hayar los numero pares, imperes, positivos y negativos ***** */
    //for each-callback
    numeros.forEach(numero => {
        if (numero%2==0) {
            num_pares.push(numero);
        }else if(numero%2==1) {
            num_impares.push(numero);
        }
        if (numero>=0) {
            num_posi.push(numero);
        }else {
            num_nega.push(numero);
        }
    });
    /* ***** Fin del For de como hayar si los numero son pares, imperes, positivos o negativos ***** */

    /* ***** Mensaje de las sumas ***** */
    alert("suma de los numeros pares son: "+suma_ele_arry(num_pares));
    alert("suma de los numeros inpares son: "+suma_ele_arry(num_impares));
    alert("cantidad de los numeros positivos son: "+num_posi.length);
    alert("cantidad de los numeros negativos son: "+num_nega.length);
    alert("suma de todos los numeros es: "+suma_ele_arry(numeros)/numeros.length);
    /* ***** Fin de los Mensajes de las sumas ***** */
}
/* ***** Fin de designar todos los numeros ***** */

/* ***** Metodo de hayar las sumas ***** */
function suma_ele_arry(arry) {
    var suma=0
    arry.forEach (numer =>{
        suma =suma + numer;
    });
    return suma
}
/* ***** Fin del Metodo de hayar las sumas ***** */

alert("fin",designar_numero()); /* ***** Alerta si pone NO ***** */