let score = [[Math.floor(Math.random()*8),Math.floor(Math.random()*8),", victoire de PSG",", victoire de Manchester"],[Math.floor(Math.random()*8),Math.floor(Math.random()*8),", victoire de Liverpool",", victoire de OM"],[Math.floor(Math.random()*8),Math.floor(Math.random()*8),", victoire de OL",", victoire de FCB"]];
let equipe = ["PSG","Manchester","Liverpool","OM","OL","FCB"];
let victoire = [];
let y=1;

function match(){
	for(let i=0;i<3;i++)
	{
		if(score[i][0]>score[i][1]){
			
			victoire[i] = score[i][2]; 
			victoire[i+3] = equipe[y];
			
		}else if(score[i][0]==score[i][1]){
			
			victoire[i] = ", égalité";
		}else if(score[i][0]<score[i][1]){
			
			victoire[i] = score[i][3];
			victoire[i+3] = equipe[y+1]; 
		}
		y+=2;
	}
}
	


match();

let gagnant = [
"Resultat du match 1: " + equipe[0] + " contre " + equipe[1] + " résultat " + score[0][0] + " : " + score[0][1] + victoire[0],
"Resultat du match 2: " + equipe[2] + " contre " + equipe[3] + " résultat " + score[1][0] + " : " + score[1][1] + victoire[1],
"Resultat du match 3: " + equipe[4] + " contre " + equipe[5] + " résultat " + score[2][0] + " : " + score[2][1] + victoire[2]];

let choix = [[prompt("vous pariez sur PSG ou Manchester"),+prompt("Combien parier vous ?")],
[prompt("vous pariez sur Liverpool ou OM"),+prompt("Combien parier vous ?")],
[prompt("vous pariez sur OL ou FCB"),+prompt("Combien parier vous ?")]];



function resultat(){
  console.log(gagnant[0]);
  if (choix[0][0] == victoire[3]){
    	console.log("vous avez gagnez votre paris pour le premier match");
	choix[0][1] = choix[0][1]*2;
	console.log("Vous avez gagner"+choix[0][1]+"€");  
  }else{
    	console.log("vous avez perdu votre paris pour le premier match");
	choix[0][1] = 0;
	console.log("Vous avez tout perdus !");  
  }
  console.log(gagnant[1]);
  if (choix[1][0] == victoire[4]){
    	console.log("vous avez gagnez votre paris pour le deuxième match");
	choix[1][1] = choix[1][1]*2;
	console.log("Vous avez gagner"+choix[1][1]+"€");  
  }else{
   	 console.log("vous avez perdu votre paris pour le deuxième match");
	 choix[1][1] = 0;
	 console.log("Vous avez tout perdus !");  
  }
  console.log(gagnant[2]);
  if (choix[2][0] == victoire[5]){
   	 console.log("vous avez gagnez votre paris pour le troisième match");
	 choix[2][1] = choix[2][1]*2;
	 console.log("Vous avez gagner"+choix[2][1]+"€");  
  }else{
  	  console.log("vous avez perdu votre paris pour le troisième match");
	  choix[2][1] = 0;
	  console.log("Vous avez tout perdus !");  
  }
}

console.log(resultat());
