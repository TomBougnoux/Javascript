// Partie 1

// Déclaration des variables
const nom_Classe = "B1 A";
let nombre_Eleves = 29;
let classe_Ouverte = true;

// Affichage
console.log("Nom de la classe :", nom_Classe);
console.log("Nombre d’élèves :", nombre_Eleves);
console.log("Classe ouverte :", classe_Ouverte);

// Partie 2

// Création de l'objet élève
let eleve = {
  prenom: "Tom",
  note_Maths: 15,
  note_Francais: 11
};

// Affichage
console.log(eleve.prenom);

// Partie 3 

// Tableau d'élèves
let eleves = [
  { prenom: "Tom", noteMaths: 15, noteFrancais: 11 },
  { prenom: "Ilija", noteMaths: 9 , noteFrancais: 5 },
  { prenom: "Romain", noteMaths: 12, noteFrancais: 8 }
];

// Boucle for pour afficher le prénom de chaque élève
for (let i = 0; i < eleves.length; i++) {
  console.log(eleves[i].prenom);
}

// Partie 4

// Boucle for pour calculer et afficher la moyenne de chaque élève
for (let i = 0; i < eleves.length; i++) {
  let moyenne = (eleves[i].noteMaths + eleves[i].noteFrancais) / 2;
  console.log(eleves[i].prenom, " Moyenne :", moyenne);
}

// Partie 5

// Boucle pour vérifier si chaque élève est admis ou refusé
for (let i = 0; i < eleves.length; i++) {
  let moyenne = (eleves[i].noteMaths + eleves[i].noteFrancais) / 2;

  if (moyenne >= 10) {
    console.log(eleves[i].prenom + " - Admis");
  } else {
    console.log(eleves[i].prenom + " - Refusé");
  }
}

// Partie 6

// Boucle pour afficher la mention selon la moyenne
for (let i = 0; i < eleves.length; i++) {
  let moyenne = (eleves[i].noteMaths + eleves[i].noteFrancais) / 2;
  let mention;

  if (moyenne >= 16) {
    mention = "Très bien";
  } else if (moyenne >= 14) {
    mention = "Bien";
  } else if (moyenne >= 12) {
    mention = "Assez bien";
  } else if (moyenne >= 10) {
    mention = "Passable";
  } else {
    mention = "Insuffisant";
  }

  console.log(eleves[i].prenom + " - Moyenne : " + moyenne + " - Mention : " + mention);
}

// Partie 7

// prise en compte du nombre d’élèves admis.
let i = 0;  // compteur pour la boucle
let nbAdmis = 0;  // compteur d'élèves admis


while (i < eleves.length) {
  let moyenne = (eleves[i].noteMaths + eleves[i].noteFrancais) / 2;  //Calul pour la moyenne

  if (moyenne >= 10) {
    nbAdmis++;  // on ajoute 1 au nombre d'élèves admis
  }

  i++;  // passe à l'élève suivant
}

console.log("Nombre d'élèves admis : " + nbAdmis);

// Bonus 

// Calucul de la moyenne de classe
let sommeMoyennes = 0;
for (let i = 0; i < eleves.length; i++) {
  let moyenne = (eleves[i].noteMaths + eleves[i].noteFrancais) / 2;
  sommeMoyennes += moyenne;
}
let moyenneClasse = sommeMoyennes / eleves.length;
console.log("Moyenne de la classe : " + moyenneClasse);

// Ajout d'un nouvel élève
eleves.push({ prenom: "Fidel", noteMaths: 19, noteFrancais: 17 });
console.log("Nombre d'élèves après ajout : " + eleves.length);

// Vérifie si tous les élèves sont admis
let tousAdmis = true;
for (let i = 0; i < eleves.length; i++) {
  let moyenne = (eleves[i].noteMaths + eleves[i].noteFrancais) / 2;
  if (moyenne < 10) {
    tousAdmis = false;
    break;
  }
}