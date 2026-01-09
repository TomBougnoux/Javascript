//////////////////////// Code fourni (ne pas moidifier) ////////////////////////

// Définir la taille du tableau de notes au hasard entre 15 et 30 éléments
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Déclarer le tableau pour stocker les notes
let notes = [];
// Définir la note maximale (pas besoin de définir la note minimale car elle est 0 par défaut)
let note_maximum = 20;

// Itérer autant de fois qu'on a de notes aléatoires à générer
for (let i = 0; i < taille; i++) {
    // Générer une note aléatoire entre 0 et note_maximum (inclus)
    let note = Math.floor(Math.random() * (note_maximum + 1));
    // Ajouter la note générée au tableau
    notes.push(note);
}

///////////////////////////////////////////////////////////////////////////////


// Partie 1

// Afficher la taille du tableau
stockages_notes=[]
console.log("Taille du tableau :", notes.length);
for (i = 0; i < notes.length; i++){
    stockages_notes.push(notes[i])
}

// Initialisation min et max
let min = notes[0];
let max = notes[0];

// Recherche du minimum et du maximum
for (let i = 1; i < notes.length; i++) {
    if (notes[i] < min) {
        min = notes[i];
    }
    if (notes[i] > max) {
        max = notes[i];
    }
}

// Affichages
console.log("Plus petite valeur :", min);
console.log("Plus grande valeur :", max);
console.log("Tableau des notes :", notes);


// Partie 2

// initialisation de la variable   
let indiceMin = 0;

// Parcours du tableau
for (let i = 1; i < notes.length; i++) {
    if (notes[i] < notes[indiceMin]) {
        indiceMin = i;
    }
}

// Affichage de la valeur minimale et de son indice
console.log("Plus petite valeur :", notes[indiceMin]);
console.log("Indice de la plus petite valeur :", indiceMin);


// Partie 3

// Échange entre la plus petite valeur et la valeur à l'indice 0
let temp = notes[0];
notes[0] = notes[indiceMin];
notes[indiceMin] = temp;

// Affichage pour vérifier l'échange
console.log("Tableau après échange :", notes);


// Partie 4

// Boucle externe : on parcourt chaque position du tableau
for (let i = 0; i < notes.length - 1; i++) {
    let indiceMin = i;

    // Boucle interne : on cherche la plus petite valeur dans le reste du tableau
    for (let j = i + 1; j < notes.length; j++) {
        if (notes[j] < notes[indiceMin]) {
            indiceMin = j;
        }
    }

    // Échange de la valeur trouvée avec la valeur à la position i
    let temp = notes[i];
    notes[i] = notes[indiceMin];
    notes[indiceMin] = temp;
}

// Affichage final du tableau trié
console.log("Tableau trié :", notes);

// Partie 5

// Affichage du tableau avant tri et après tri
console.log("Tableau avant tri :", stockages_notes);
console.log("Tableau après tri :", notes);