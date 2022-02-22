let texto = (prompt("Insira o texto:"));

console.log(texto);

console.log(texto.toUpperCase());
document.write(texto.toUpperCase())

document.write("<br><br>");

console.log(texto.toLowerCase());
document.write(texto.toLowerCase())

document.write("<br><br>");


var letras = texto.split("",texto.length);


for (letra of letras) {
    document.write(letra + "<br>");
}
