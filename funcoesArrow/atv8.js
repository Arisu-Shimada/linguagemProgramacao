let idades = [12, 14, 18, 20, 11, 19];
let filtrarMaioresDeIdade = (lista) => {
    for(let i = 0; i < lista.length; i++){
        if(lista[i] >= 18){
            console.log(lista[i]);
        }
    }
}
filtrarMaioresDeIdade(idades);
