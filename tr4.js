score = [[Math.random()*8,Math.random()*8],[Math.random()*8,Math.random()*8],[Math.random()*8,Math.random()*8]];
equipe = ["PSG","Manchester","Liverpool","OM","OL","FCB"];
let victoire = [];

function match{
if(score[0][0]>score[0][1])
  {
    victoire[0][0] = score[0][0];
    victoire[0][1] = "PSG";
  }
else {
  victoire[0][0] = score[0][1];
  victoire[0][1] = "Manchester";
}
if(score[1][0]>score[1][1])
  {
    victoire[1][0] = score[1][0];
    victoire[1][1] = "Livepool";
  }
else {
  victoire[1][0] = score[1][1];
  victoire[1][1] = "OM";
}
if(score[2][0]>score[2][1])
  {
    victoire[2][0] = score[2][0];
    victoire[2][1] = "OL";
  }
else {
  victoire[2][0] = score[2][1];
  victoire[2][1] = "FCB";
}
}

function affichage{
console.log("Resultat du match 1:"+equipe[1]+"contre"+equipe[2]+" victoire"+victoire[0][1]+" :"+victoire[0][0]);
console.log("Resultat du match 2:"+equipe[3]+"contre"+equipe[4]+" victoire"+victoire[1][1]+" :"+victoire[1][0]);
console.log("Resultat du match 3:"+equipe[5]+"contre"+equipe[6]+" victoire"+victoire[2][1]+" :"+victoire[2][0]);

  
}
