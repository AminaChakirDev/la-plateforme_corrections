// Récupère le p
const counter = document.getElementById("compteur");
// Récupère le button
const button = document.getElementById("button");

// Crée la fonction addone()
function addone() {
  // Quand on clique sur le bouton...
  button.addEventListener("click", () => {
    // Récupère la valeur du compteur
    let counterValue = parseInt(counter.textContent);
    // textContent permet de récupérer le texte affiché dans le paragraphe dans un format chaîne de caractères (ex : "0").
    // Pour pouvoir faire une addition, il faut le transformer en nombre
    // Pour le tranformer en nombre, utilise la méthode parseInt().

    // Ajoute 1 à cette valeur
    counterValue++;

    // Affiche la nouvelle valeur dans le paragraphe
    counter.textContent = counterValue;
  });
}

// Appelle la fonction pour qu'elle s'exécute
addone();
