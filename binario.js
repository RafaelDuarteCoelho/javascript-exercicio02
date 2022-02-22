let validador = true;
let numeroDigitado = "";
let binario;
let decimal = 0;

while (validador){
    let achouErro = false;
    numeroDigitado = prompt("Digite um número binário:");
    binario = numeroDigitado.split("" , numeroDigitado.length);
    for (digito of binario) {
        if ((digito !== "1") && (digito !== "0")) {
            achouErro = true;
        }
    }

    if (achouErro) {
        validador = true;
        console.log("Não é binário!");
    } else {validador = false;}
}

for (digito of binario) {
    if (digito == "0") {
        decimal = decimal * 2;
    }
    if (digito == "1") {
        decimal = decimal * 2 + 1;
    }
}

console.log(decimal);
document.write(decimal);