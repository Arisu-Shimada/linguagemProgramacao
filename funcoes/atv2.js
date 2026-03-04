const readline = require('readline-sync');

function verificarStatusNota(nota){
    if(nota >= 6){
        console.log("Aprovado");
    }if(nota < 6){
        console.log("Reprovado");
    }
}

nota = readline.question("Digite sua nota: ");

verificarStatusNota(nota);