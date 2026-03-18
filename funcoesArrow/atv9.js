const readline = require('readline-sync');

let ehPar = (valor) => valor % 2 == 0;

console.log("Resultado: ", ehPar(readline.question("Digite um Numero: ")));