const readline = require('readline-sync');

function calcularDesconto(produto){
    desconto = (produto / 100) * 10;
    return desconto;
}

valor = readline.question("Digite o valor do produto: ");

total = calcularDesconto(valor) - valor;

console.log(total);