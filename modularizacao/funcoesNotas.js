let formatarNome = (nome) => nome.trim().toUpperCase();
let validarNota = (nota) => !isNaN(nota) && nota >= 0 && nota <= 10;
let calcularMedia = (n1,n2) => (n1+n2)/2;
module.exports = {
    formatarNome,
    validarNota,
    calcularMedia
}
