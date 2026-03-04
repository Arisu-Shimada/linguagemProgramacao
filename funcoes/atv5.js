const a = require('a');
const readline = require('readline-sync');
let pares = 0;
let count = 1;
let mat = [
    1,2,
    3,4
];

function contarParesMatriz(){
    for(let i = 0; i < 1; i++){
        for (let j = 0; j < 4; j++) {
            if(parseInt(mat[i,j]) % 2 == 0){
                pares += 1;
            }
        }
    }
    return pares;
}

pares = contarParesMatriz();

for(let i = 0; i < 1; i++){
    for (let j = 0; j < 4; j++) {
        console.log(mat[i,j]);
    }
}

console.log();
console.log(pares);