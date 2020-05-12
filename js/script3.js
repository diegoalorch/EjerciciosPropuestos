var nombre = prompt("Nombre: " )
var edad =prompt("Edad: " )
var salario =prompt("Salario: " )
function calcularedad() {
    if (edad<=18) {
        return salario="no tiene edad para trabajar"
    } else {
        if (edad>=19 && edad<=50) {
            aumento = salario*0.05
            salario=parseInt(salario)+parseInt(aumento)
            console.log(aumento)
            return salario
        } else {
            if (edad>=51 && edad<=60) {
                aumento = salario*0.10
                salario=parseInt(salario)+parseInt(aumento)
                console.log(aumento)
                return salario
            } else if (edad>=60) {
                aumento = salario*0.15
                salario=parseInt(salario)+parseInt(aumento)
                console.log(aumento)
                return salario
            }
        }
    }
    
}

alert(calcularedad())