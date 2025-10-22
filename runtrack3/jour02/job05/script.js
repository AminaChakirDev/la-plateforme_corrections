// Récupère le footer
const footer = document.getElementById("footer");

// Ecoute le scroll de la fenetre du navigateur (window)
window.addEventListener("scroll", () => {
  // Récupère la position vertical de ta fenetre
  const position = window.scrollY;
  
  // Calcule le pourcentage de défilement (entre 0 et 1) pour l'affecter comme valeur à l'opacité
  const opacity = position / document.body.offsetHeight;

  // La couleur devient de plus en plus opaque en descendant
  footer.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
});
