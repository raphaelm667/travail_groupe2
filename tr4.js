let score = [[Math.floor(Math.random()*8),Math.floor(Math.random()*8)],[Math.floor(Math.random()*8),Math.floor(Math.random()*8)],[Math.floor(Math.random()*8),Math.floor(Math.random()*8)]];
let equipe = ["PSG","Manchester","Liverpool","OM","OL","FCB"];
let victoire;

function match(){
	victoire = [[],[],[]];
	if(score[0][0]>score[0][1]){
		victoire[0][0] = score[0][0];
		victoire[0][1] = "PSG";
	}else {
		victoire[0][0] = score[0][1];
		victoire[0][1] = "Manchester";
	}
	if(score[1][0]>score[1][1]){
		victoire[1][0] = score[1][0];
		victoire[1][1] = "Liverpool";
	}else {
		victoire[1][0] = score[1][1];
		victoire[1][1] = "OM";
	}
	if(score[2][0]>score[2][1]){
		victoire[2][0] = score[2][0];
		victoire[2][1] = "OL";
	}else {
		victoire[2][0] = score[2][1];
		victoire[2][1] = "FCB";
	}
	return victoire;
}

let result = match();

let gagnant = [
"Resultat du match 1: " + equipe[0] + " contre " + equipe[1] + " résultat " + score[0][0] + " : " + score[0][1] + ", victoire de " + victoire[0][1],
"Resultat du match 2: " + equipe[2] + " contre " + equipe[3] + " résultat " + score[1][0] + " : " + score[1][1] + ", victoire de " + victoire[1][1],
"Resultat du match 3: " + equipe[4] + " contre " + equipe[5] + " résultat " + score[2][0] + " : " + score[2][1] + ", victoire de " + victoire[2][1]];

let choix = [prompt("vous pariez sur PSG ou Manchester"),
prompt("vous pariez sur Liverpool ou OM"),
prompt("vous pariez sur OL ou FCB")];

function resultat(){
  console.log(gagnant[0]);
  if (choix[0] == victoire[0][1]){
    console.log("vous avez gagnez votre paris pour le premier match");
  }else{
    console.log("vous avez perdu votre paris pour le premier match");
  }
  console.log(gagnant[1]);
  if (choix[1] == victoire[1][1]){
    console.log("vous avez gagnez votre paris pour le deuxième match");
  }else{
    console.log("vous avez perdu votre paris pour le deuxième match");
  }
  console.log(gagnant[2]);
  if (choix[2] == victoire[2][1]){
    console.log("vous avez gagnez votre paris pour le troisième match");
  }else{
    console.log("vous avez perdu votre paris pour le troisième match");
  }
}

console.log(resultat());
