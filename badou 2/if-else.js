const books = require('./library.json');

/**
 * @param {array} stock 
 * @returns {number} 
 */
function nbLivres(stock) {
  return stock.length;
}

/**
 * @param {array} stock 
 */
function listerTousLesTitres(stock) {
  stock.forEach(book => {
    console.log(book.title);
  });
}

/**
 * @param {array} stock 
 * @param {string} title 
 * @param {string} author 
 * @param {string} genre 
 * @param {number} pages 
 * @param {string} language 
 * @param {number} year 
 * @returns {array} 
 */
function ajouterLivre(stock, title, author, genre, pages, language, year) {
  const nouveauLivre = {stock, title, author, genre, pages, language, year };
  stock.push(nouveauLivre);
  return stock;
}

/**
 * @param {array} stock 
 * @param {number} index 
 */
function supprimerLivre(stock, index) {
  stock.splice(index, 1);
}

/**
 * @param {array} stock 
 * @param {number} index 
 * @param {string} newTitle 
 */
function mettreAJourTitre(stock, index, newTitle) {
  stock[index].title = newTitle;
}

/**
 * @param {array} stock 
 */
function listerLivresEnAnglais(stock) {
  for (const book of stock) {
    if (book.language.toLowerCase() == 'english') {
      console.log(book.title);
    }
  }
}
/**
 * @param {array} stock 
 */
function listerLivresPlusDe300Pages(stock) {
  for (const book of stock) {
    if (book.pages < 300) {
      console.log(book.title);
    }
  }
}

/**
 * @param {array} stock 
 * @returns {array} 
 */
function livresEntre2000Et2010(stock) {
  for (const book of stock) {
    if (book.year > 2000 && book.year < 2010) {
      console.log(book.title);
    }
  }
}
/**
 * @param {array} stock 
 * @returns {array} 
 */
function livresFantasyEnAnglais(stock) {
  for (const book of stock) {
    if (book.genre.toLowerCase() == 'fantasy' && book.language.toLowerCase() == 'english') {
      console.log(book.title);
    }
  }
}
/**
 * @param {array} stock 
 * @returns {object|null} 
 */
function livreContenantRide(stock) {
  for (const book of stock) {
    if (book.title.toLowerCase().includes('ride')) {
      return book;
    }
  }
  return null;
}



console.log("Nombre de livres:", nbLivres(books));

console.log("Liste de tous les titres:");
listerTousLesTitres(books);

console.log("Ajout d'un nouveau livre:");
ajouterLivre(books,'badouride', 'badou', 'Fantasy', 300, 'English', 2002);
listerTousLesTitres(books); 
console.log("Suppression du premier livre:");
supprimerLivre(books, 0);
listerTousLesTitres(books); 

console.log("Mise à jour du titre du deuxième livre:");
mettreAJourTitre(books, 1, "Titre Mis à Jour");
listerTousLesTitres(books); 

console.log("Liste des livres en anglais:");
listerLivresEnAnglais(books);

console.log("Liste des livres de plus de 300 pages:");
listerLivresPlusDe300Pages(books);

console.log("Liste des livres entre 2000 et 2010:");
livresEntre2000Et2010(books);

console.log("Liste des livres de fantasy en anglais:");
livresFantasyEnAnglais(books);

console.log("Livre contenant 'ride':", livreContenantRide(books));
