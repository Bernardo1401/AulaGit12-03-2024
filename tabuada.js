let numero = 2;
let maximo = 19;

if (numero % 1 !== 0 || maximo % 1 !== 0) {
    console.log("operação não realizavel com números decimais");
} else if (numero > 0 &&  maximo > 0) {
    for (let i = 0; i <= maximo; i++) {
        console.log(numero + " x " + i + " = " + i * numero);
    }
} else if (numero == 0 || maximo == 0) {
    console.log("operação não realizavel, pois algum valor é igual a 0");
} else {
    console.log("operação não realizavel, pois algum número é menor que 0");
}
