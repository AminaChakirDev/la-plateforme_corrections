// Récupère l'article qui contient la citation
const articleText = document.getElementById("citation");
// Récupère le bouton
const button = document.getElementById("button");

// Crée une fonction appelée citation
function citation() {
  // Quand on clique sur le bouton...
  button.addEventListener("click", () => {
    // ...on affiche dans la console le texte de l'article
    console.log(articleText.innerHTML);
  });
}

// Appelle la fonction pour qu'elle s'exécute
citation();
