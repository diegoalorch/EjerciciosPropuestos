/* **** Como sacar un factorial **** */
num = Number(prompt("Numero 1: "));
function factoria() {
    let i, s = 1;
    for (i = 1, i < num + 1; i++;){
        s*=i;
    }
    return s;
}
console.log("Factorial es: ", factoria(num));
/* **** Fin de Como sacar un factorial **** */