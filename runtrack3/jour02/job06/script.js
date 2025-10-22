// Le code Konami, c’est quoi ?
// C’est une suite de touches secrète issue d’un vieux jeu vidéo (Konami).
// La combinaison est ↑ ↑ ↓ ↓ ← → ← → B A

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let codePosition = 0;

// Écoute l'événement keydown (appui sur une touche du clavier)
document.addEventListener("keydown", (event) => {
  // Si la premiere touche appuyé correspond à la valeur du premier element du tableau konami (index 0),
  if (event.key === konamiCode[codePosition]) {
    // on vérifie la 2eme touche
    codePosition++;

    // Si toute la séquence a été correctement tapée
    if (codePosition === konamiCode.length) {
      // Déclenche la "surprise"
      // Ici on modifie la couleur du background de l'écran
      document.body.style.backgroundColor = "#003366";
      // la couleur du texte
      document.body.style.color = "white";
      // la police d'ecriture
      document.body.style.fontFamily = "Arial, sans-serif";

      // On crée un élément <h1>
      const title = document.createElement("h1");
      title.textContent = "Bienvenue à La Plateforme_ !";

      // On l’ajoute à la page
      document.body.append(title);

    }
  } else {
    // Mauvaise touche → on recommence depuis le début
    codePosition = 0;
  }
});
