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
    if (nbrVie === 0){
        alert("vous n'avez plus de vie recommencé une partie");
    }else if (plateau[ligne][colone] === 3){
        alert("case deja testée");
    }else if (plateau[ligne][colone] === 1){
        alert("Safe");
        plateau[ligne][colone] = 3;
    }else{
        alert("BOOM");
        plateau[ligne][colone] = 3;
        nbrVie -= 1;
    }
}

function case1(){
    testVal(0,0);
}function case2(){
    testVal(0,1);
}function case3(){
    testVal(0,2);
}function case4(){
    testVal(0,3);
}function case5(){
    testVal(0,4);
}function case6(){
    testVal(1,0);
}function case7(){
    testVal(1,1);
}function case8(){
    testVal(1,2);
}function case9(){
    testVal(1,3);
}function case10(){
    testVal(1,4);
}function case11(){
    testVal(2,0);
}function case12(){
    testVal(2,1);
}function case13(){
    testVal(2,2);
}function case14(){
    testVal(2,3);
}function case15(){
    testVal(2,4);
}function case16(){
    testVal(3,0);
}function case17(){
    testVal(3,1);
}function case18(){
    testVal(3,2);
}function case19(){
    testVal(3,3);
}function case20(){
    testVal(3,4);
}function case21(){
    testVal(4,0);
}function case22(){
    testVal(4,1);
}function case23(){
    testVal(4,2);
}function case24(){
    testVal(4,3);
}function case25(){
    testVal(4,4);
}
