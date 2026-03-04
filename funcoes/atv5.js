let pares = 0;
let mat = [
    1,2,
    3,4
];

function contarParesMatriz(){
    for(let i = 0; i < mat.length; i++){
        for (let j = 0; j < mat[i].length; j++) {
            if(parseInt(mat[i,j]) % 2 == 0){
                pares += 1;
            }
        }
    }
    return pares;
}

pares = contarParesMatriz();

for(let i = 0; i < mat.length; i++){
    for (let j = 0; j < mat[i].length; j++) {
        console.log(mat[i,j]);
    }
}

console.log();
console.log(pares);