  // Récupère le bouton
const button = document.getElementById("button");

// Crée une fonction appelée showhide
function showhide() {
  // Quand on clique sur le bouton...
  button.addEventListener("click", () => {
    // ...on vérifie si un <article> existe déjà dans la page
    const existingArticle = document.querySelector("article");

    if (existingArticle) {
      // Si l'article existe déjà, on le supprime
      existingArticle.remove();
    } else {
      // Sinon, on le crée
      const newArticle = document.createElement("article");
      // On lui ajoute le texte demandé
      newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
      // Et on l'ajoute à la page (dans le body ici)
      document.body.append(newArticle);
    }
  });
}

// Appelle la fonction pour qu'elle s'exécute
showhide();