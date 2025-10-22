// Définition d'un nombre premier
// Un nombre premier est un nombre entier supérieur à 1 qui n’a que deux diviseurs : 1 et lui-même.

// Créer deux fonctions :
// 1- La première vérifie si un nombre est premier.
// 2- La seconde vérifie si deux nombres sont premiers 
// et retourne leur somme si c’est le cas, ou false sinon.


// Vérifier si un nombre est premier
function isPrime(number) {
  // Étape 1 : Si le nombre est inférieur ou égal à 1, ce n’est pas un nombre premier
  if (number <= 1) {
    return false;
  }

  // Étape 2 : On teste dans une boucle tous les diviseurs possibles, de 2 jusqu’à (number - 1)
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      // Si le nombre est divisible par i, alors il n’est pas premier
      return false;
    }
  }

  // Étape 3 : Si aucun diviseur n’a été trouvé, le nombre est premier
  return true;
}


// Vérifier si deux nombres sont premiers et retourner leur somme
function sommeNombresPremiers(a, b) {
  // Étape 1 : On vérifie si les deux nombres sont premiers en appelant la fonction isPrime()
  if (isPrime(a) && isPrime(b)) {
    // Étape 2 : Si les deux sont premiers, on retourne leur somme
    return a + b;
  } else {
    // Étape 3 : Sinon, on retourne false
    return false;
  }
}


console.log(sommeNombresPremiers(2, 3)); // 5
console.log(sommeNombresPremiers(2, 4)); // false
console.log(sommeNombresPremiers(11, 13)); // 24
