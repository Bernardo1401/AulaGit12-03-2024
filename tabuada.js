let tabuada = 23;
let limite = 19;

 if (tabuada > 0 && limite > 0) {
    for (let i = 0; i <= limite; i++) {
        console.log(tabuada + " x " + i + " = " + i * tabuada);
    }
} else if (tabuada == 0 || limite == 0) {
    console.log("operação não realizavel, pois algum valor é igual a 0");
} else {
    console.log("operação não realizavel, pois algum número é menor que 0");
}