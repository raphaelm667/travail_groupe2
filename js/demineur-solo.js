"use strict";
let plateau = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
let nbrVie = 4;
function nbBombe()
{
	let nbrBombe = +prompt("combien de bombes sur le terrain ?");
	for(let i = 0; i <= nbrBombe; i++){
		let posBomb1 = Math.floor(Math.random()*4);
		let posBomb2 = Math.floor(Math.random()*4);
		while (plateau[posBomb1][posBomb2] !== 0){
			posBomb1 = Math.floor(Math.random()*4);
			posBomb2 = Math.floor(Math.random()*4);
		}
		if (plateau[posBomb1][posBomb2] === 0){
			plateau[posBomb1][posBomb2] = 2;
		}
	  }
}

function testVal(ligne, colone){
    if (nbrVie === 0){
        alert("vous n'avez plus de vie recommencé une partie");
	    reset();
    }else if (plateau[ligne][colone] === 3){
        alert("case deja testée");
    }else if (plateau[ligne][colone] === 0){
        alert("Safe");
        plateau[ligne][colone] = 3;
    }else{
        alert("BOOM");
        plateau[ligne][colone] = 3;
        nbrVie -= 1;
    }
}
function reset()
{
    plateau = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
    nbrVie = 4;
    nbBombe();
}
