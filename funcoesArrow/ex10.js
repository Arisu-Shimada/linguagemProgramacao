const readline = require('readline-sync');

let processarSituacao = (nota1, nota2, nota3) => {
    let media = (nota1 + nota2 + nota3) / 3;
    if(media >= 6){
        return "Aprovado!";
    } else {
        return "Reprovado! >:(";
    }
}

console.log("Resultado:", processarSituacao(readline.question("Digite a primeira nota: "), readline.question("Digite a segunda nota: "), readline.question("Digite a terceira nota: ")));