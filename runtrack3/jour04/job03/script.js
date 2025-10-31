// Je récupère les éléments HTML dont j'ai besoin
const idInput = document.getElementById("id");
const nameInput = document.getElementById("name");
const typeSelect = document.getElementById("type");
const submitButton = document.getElementById("filter");
const filterForm = document.getElementById("form");
const resultUl = document.getElementById("result");

// J'ajoute un écouteur d'évèvement sur la soumission du formulaire
filterForm.addEventListener("submit", (e) => {
  // Je supprime le rafraichissement par défaut lors de la soumission du formulaire grâce à la méthode preventDefault()
  e.preventDefault();

  // Je récupère les informations contenues dans le fichier pokemons.json grâce à la méthode fetch qui envoie une requête et reçoit une réponse
  fetch("pokemons.json") // La méthode fetch est une méthode asynchrone : la réponse n'est pas immédiate
    .then((response) => response.json()) // On utilise le .then pour indiquer quelle action exécuter LORSQUE la réponse sera reçue, ici extraire les informations en json grâce à la méthode .json() qui est également asynchrone
    .then((pokemons) => {
      // Une fois la réponse de la méthode json() reçue, j'utilise à nouveau le .then pour lister les actions à exécuter pour mettre en place le filtre
      let filteredPokemons = [];

      filteredPokemons = pokemons.filter(
        // La méthode filter() crée et retourne un nouveau tableau (filteredPokemons) qui contient tous les éléments du tableau d'origine (pokemons) qui remplissent une condition définit dans le callback.
        (
          pokemon // L'objet pokemon sera inclus dans le nouveau tableau filteredPokemons SI
        ) =>
          (idInput.value === "" || pokemon.id == idInput.value) && // SI son id correspond à l'id saisi par l'utilisateur OU SI l'utilisateur n'a rien saisi, ET SI
          (nameInput.value === "" || // SI l'utilisateur n'a pas saisi de nom
            pokemon.name.french // OU que le nom saisi fasse partie du nom saisi par l'utilisateur ET SI
              .toLowerCase()
              .includes(nameInput.value.toLowerCase())) &&
          (typeSelect.value === "" || pokemon.type.includes(typeSelect.value)) // SI l'utilisateur ne choisit pas de type OU que le type choisi par l'utilisateur fait partie du tableau type du pokemon
      );

      // A chaque soumission de formulaire, j'efface les précédents résultats
      resultUl.innerHTML = "";

      // Je boucle sur le tableau de résultats filteredPokemons grâce au foreach pour créer, pour chaque pokemon retenu, une balise li avec le nom du pokemon affiché
      filteredPokemons.forEach((pokemon) => {
        const li = document.createElement("li");
        li.textContent = pokemon.name.french;
        resultUl.append(li);
      });

      // Si aucun résultat n'est retourné, j'affiche un message personnalisé
      if (filteredPokemons.length === 0) {
        resultUl.innerHTML = "<li>Aucun Pokémon trouvé</li>";
      }
    });
});
