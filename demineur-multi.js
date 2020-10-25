let plateau = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
let tableJoueur = [[0,3],[0,3],[0,3],[0,3]];

function nbBombe(){
let nbrBomb = +prompt("combien de bombes sur le terrain ?");
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
}
function joueur()
{
  let tourJoueur,nbJoueur = +prompt("combien de joueurs ?"),let maxTour=0;
  while(maxTour !== 25){
  for(let i=0;i<nbJoueur;i++)
  {
    tourJoueur = (i+1);
    temp(tourJoueur);
    maxTour++;
   }
 }
  return tourJoueur;
}

function testVal(ligne, colone,tourJoueur){
    if (nbrVie === 0){
        alert("vous n'avez plus de vie recommencé une partie");
    }else if (plateau[ligne][colone] === 3){
        alert("case deja testée");
    }else if (plateau[ligne][colone] === 0){
        alert("Safe");
        plateau[ligne][colone] = 3;
    }else{
        alert("BOOM");
        plateau[ligne][colone] = 3;
    }
}
