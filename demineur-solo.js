let nbrBomb = +prompt("combien de bombes sur le terrain ?");
let plateau = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
let nbrVie = 4;
for(let i = 0; i <= nbrBomb; i++){
    let posBomb1 = Math.floor(Math.random()*5);
    let posBomb2 = Math.floor(Math.random()*5);
    while (plateau[posBomb1][posBomb2] !== 0){
        posBomb1 = Math.floor(Math.random()*5);
        posBomb2 = Math.floor(Math.random()*5);
    }
    if (plateau[posBomb1][posBomb2] === 0){
        plateau[posBomb1][posBomb2] = 2;
    }
}

for (let i = 0; i < 5; i++){
    for (let j = 0; j < 5; j++) {
        if (plateau[i][j] === 0){
            plateau[i][j] = 1;
        }
    }
}

function testVal(ligne, colone){
    if (plateau[ligne][colone] === 1){
        alert("Safe");
        plateau[ligne][colone] = 3;
    }else{
        alert("BOOM");
        plateau[ligne][colone] = 3;
        nbrVie -= 1;
    }
}
