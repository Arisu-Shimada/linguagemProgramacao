const readline = require('readline-sync');
const {
    calcularDesconto,
    verificarLimite
} = require('./logica');

function processarPagamento(produto, valor, cupom1, cupom2, cupom3, saldo){
    valorFinal = valor - calcularDesconto(parseFloat(valor), cupom1, cupom2, cupom3);
    if (verificarLimite(saldo, valorFinal)){
        console.log("Compra de ", produto.toUpperCase(), " aprovada!");
        return saldo - valorFinal;
    } else {
        console.log("Operação cancelada!");
        return saldo;
    }
}

let meuSaldo = 100.00;
// Tentativa de compra
meuSaldo = processarPagamento("Gift Card Roblox", 50.00, "aluno5", "aluno10", "", meuSaldo);
console.log(`Saldo Atualizado: R$ ${meuSaldo.toFixed(2)}`);