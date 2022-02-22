let numero;
let soma = 0;
let numeros = [];
let numerosPotencia = [];
let numerosQuadrada = [];
let numerosCubica = [];

let quantidade = parseInt(prompt("Insira a quantidade de números"));
validador = isNaN(quantidade);
while (validador){
    quantidade = parseInt(prompt("não é um número, insira novamente"));
    validador = isNaN(quantidade);
}

for (let i = 0; i < (quantidade); i++){
    numeros.push(parseFloat(prompt("Insira o número:")));
}


for (numero of numeros) {
    soma += numero;
}

let media = soma/numeros.length;

for (numero of numeros) {
    numerosPotencia.push(numero**2);
}

for (numero of numeros) {
    numerosQuadrada.push(Math.sqrt(numero));
}

for (numero of numeros) {
    numerosCubica.push(Math.cbrt(numero));
}



document.write(`Soma: ${soma} <br>`);
console.log(soma);

document.write("<br>");

document.write(`Média: ${media} <br>`);
console.log(media);

document.write("<br>");

document.write("Potências:<br><br>");
for (numero of numerosPotencia) {
    console.log(numero);
    document.write(numero + "<br>");
}

document.write("<br>");

document.write("Raízes Quadradas:<br><br>");
for (numero of numerosQuadrada) {
    console.log(numero);
    document.write(numero + "<br>");
}

document.write("<br>");

document.write("Raízes Cúbicas:<br><br>");
for (numero of numerosCubica) {
    console.log(numero);
    document.write(numero + "<br>");
}

