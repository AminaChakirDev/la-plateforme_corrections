// Récupère le textarea
const textarea = document.getElementById("keylogger");

// Mets l’écouteur sur document car on veut détecter les touches du clavier partout dans la page
document.addEventListener("keydown", (event) => {
  // Vérifie si la touche pressée est une lettre entre a et z
  // (event.key renvoie la lettre tapée)
  if (event.key.match(/[a-z]/i)) {
    // Si le focus est dans le textarea → ajoute la lettre deux fois
    if (document.activeElement === textarea) {
      // Le navigateur écrirait déjà la lettre tout seul → on bloque ce comportement avec preventDefault()
      event.preventDefault()
      // et ajoute la lettre deux fois manuellement
      textarea.value += event.key + event.key;
    } else {
      // Sinon → ajoute la lettre une seule fois
      textarea.value += event.key;
    }
  }
});
