const cupons = ["ALUNO5", "ALUNO10", "ALUNO20"];

let calcularDesconto = (valor, cupom1, cupom2, cupom3) => {
    let desconto = 0;
    if (cupons.includes(cupom1.toUpperCase())){
        cupom1 = cupom1.split('O');
        console.log(cupom1[2]);
        desconto = desconto + parseFloat(cupom1[2]) / 100;
    }if (cupons.includes(cupom2.toUpperCase())){
        cupom2 = cupom2.split("O");
        desconto = desconto + parseFloat(cupom2[2]) / 100;
    }if (cupons.includes(cupom3.toUpperCase())){
        cupom3 = cupom3.split("O");
        desconto = desconto + parseFloat(cupom3[2]) / 100;
    }
    console.log(desconto);
    if (desconto >= 0.30){
        return valor * desconto;   
    } else {
        console.log("O valor do desconto é muito alto!");
        return 0
    }
}

let podeComprar = (saldo, valorFinal) => saldo >= valorFinal;

let verificarLimite = (saldo, valorFinal) => {
    if (podeComprar(saldo, valorFinal)){
        console.log("LOG: Limite Autorizado.");
        return true;
    } else {
        console.log("LOG: Limite Insuficiente.");
        return false
    }
}
module.exports = {
    calcularDesconto,
    verificarLimite
}