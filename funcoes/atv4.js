const readline = require('readline-sync');

function estaNoIntervalo (valor, min, max){
    if(valor <= max && valor >= min){
        return true;
    } else {
        return false;
    }
}
valor = readline.question("Digite sua idade: ");
resultado = estaNoIntervalo(valor, 0, 120);

if(resultado == true){
    console.log("Está no intervalo de idade");
}if(resultado == false){
    console.log("Não está no intervalo de idade!");
}
