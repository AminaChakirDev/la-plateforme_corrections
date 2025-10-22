// Objectif : créer une fonction "tri" capable de trier un tableau de nombres
// - La fonction reçoit deux paramètres :
//    1) "numbers" → un tableau de nombres à trier
//    2) "order" → une chaîne de caractères qui vaut soit "asc" (croissant) soit "desc" (décroissant)
// - La fonction doit trier le tableau selon la valeur du paramètre "order"
// - Elle retourne ensuite le tableau trié

function tri(numbers, order) {
  // Étape 1 : Vérifier la valeur du paramètre "order"
  // Si "order" vaut "asc", on veut trier dans l'ordre croissant
  // Si "order" vaut "desc", on veut trier dans l'ordre décroissant
  // On utilisera la méthode sort() (voir la doc MDN)

  if (order === "asc") {
    // Si on veut un tri croissant : les petits nombres doivent venir avant les grands
    // Si a est plus petit que b, le résultat de (a - b) sera négatif, donc a sera placé avant b
    numbers.sort(function (a, b) {
      return a - b;
    });
  } else if (order === "desc") {
    // Si on veut un tri décroissant : les grands nombres doivent venir avant les petits
    // Si a est plus grand que b, le résultat de (b - a) sera négatif, donc a sera placé avant b
    numbers.sort(function (a, b) {
      return b - a;
    });
  }
  // Étape 2 : Retourner le tableau trié
  return numbers;
}
