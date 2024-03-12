let tabuada = 92;
let maximo = 10;

if (tabuada % 1 !== 0 || maximo % 1 !== 0) {
    console.log("operação não realizavel com números decimais");
} else if (tabuada
    > 0 && maximo > 0) {
    for (let i = 0; i <= maximo; i++) {
        console.log(tabuada + " x " + i + " = " + i * tabuada);
    }
} else if (tabuada == 0 || maximo == 0) {
    console.log("operação não realizavel, pois algum valor é igual a 0");
} else {
    console.log("operação não realizavel, pois algum número é menor que 0");
}
