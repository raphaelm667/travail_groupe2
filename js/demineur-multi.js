"use strict";
let plateau = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
let tableJoueur = [[0,3],[0,3],[0,3],[0,3]];
let nbJoueur = +prompt("combien de joueurs ?");
let maxTour=0;

function nbBombe(){
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
function joueur(ligne,colone)
{
  let tourJoueur;
  while(maxTour !== 25){
  for(let i=0;i<nbJoueur;i++)
  {
    tourJoueur = i;
    alert("Tour joueur"+(i+1));
    if (tableJoueur[tourJoueur][1] !== 0){
    testVal(ligne,colone,tourJoueur);
    }
    else
    {
    alert("Joueur"+ (tourjoueur +1) +" n'as plus de vie");
    }
    maxTour++;
   }
 }
    alert("partie terminer");
}

function testVal(ligne, colone,tourJoueur){
    let unSur2=-1;
    unSur2++;
    if(unSur2%2==0)
    {
        joueur(ligne,colone);
    }
    if (plateau[ligne][colone] === 3){
        alert("case deja testée");
    }else if (plateau[ligne][colone] === 0){
        alert("Safe");
        plateau[ligne][colone] = 3;
        tableJoueur[tourJoueur][0] += 50;
    }else{
        alert("BOOM");
        plateau[ligne][colone] = 3;
        tableJoueur[tourJoueur][1] -= 1;
        tableJoueur[tourJoueur][0] -= 100;
    }
}

function reset()
{
    plateau = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
    tableJoueur = [[0,3],[0,3],[0,3],[0,3]];
    nbJoueur = +prompt("combien de joueurs ?");
    maxTour=0;
    nbBombe();
}
