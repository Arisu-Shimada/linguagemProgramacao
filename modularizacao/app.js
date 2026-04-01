const readline = require('readline-sync');
const {
    formatarNome,
    validarNota,
    calcularMedia
} = require('./funcoesNotas');

let nome = formatarNome(readline.question("Digite seu nome: "));

let nota1 = parseFloat(readline.question("Digite a nota 1: "));
while (true) {
    valido = validarNota(parseFloat(nota1));
    if (valido == true){
        break;
    } else {
        console.log("A nota digitada é invalida, digite novamente.");
    }
}
let nota2 = parseFloat(readline.question("Digite a nota 2: "));
while (true) {
    valido = validarNota(parseFloat(nota2));
    if (valido == true){
        break;
    } else {
        console.log("A nota digitada é invalida, digite novamente.");
    }
}
let media = calcularMedia(nota1, nota2);
console.log("Aluno: ", nome, " | Média: ", media, " | Status: ", media >= 6 ?"Aprovado":"Reprovado")