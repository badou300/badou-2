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
  const nouveauLivre = { stock, title, author, genre, pages, language, year };
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
    if (book.language.toLowerCase() === 'english') {
      console.log(book.title);
    }
  }
}
/**
 * @param {array} stock 
 */
function listerLivresPlusDe300Pages(stock) {
  for (const book of stock) {
    if (book.pages > 300) {
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
    if (book.genre.toLowerCase() === 'fantasy' && book.language.toLowerCase() === 'english') {
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



const stock = livres.slice();

console.log('Nombre de livres:', nbLivres(stock));

console.log('\nListe de tous les titres:');
listerTousLesTitres(stock);

console.log('\nAjouter un nouveau livre:');
const stockMaj = ajouterLivre(stock, 'ride', 'badou', 'Fantasy', 300, 'English', 2002);
console.log('Stock mis à jour:', stockMaj);

console.log('\nSupprimer un livre à l\'index 1:');
supprimerLivre(stockMaj, 1);
console.log('Stock mis à jour après suppression:', stockMaj);

console.log('\nMettre à jour le titre du livre à l\'index 0:');
mettreAJourTitre(stockMaj, 0, 'Titre mis à jour');
console.log('Stock mis à jour après mise à jour du titre:', stockMaj);

console.log('\nListe des livres en anglais:');
listerLivresEnAnglais(stockMaj);

console.log('\nListe des livres avec plus de 300 pages:');
listerLivresPlusDe300Pages(stockMaj);

console.log('\nLivres publiés entre 2000 et 2010:');
console.log(livresEntre2000Et2010(stockMaj));

console.log('\nLivres Fantasy en anglais:');
console.log(livresFantasyEnAnglais(stockMaj));

console.log('\nLivre contenant "ride" dans le titre:');
console.log(livreContenantRide(stockMaj));
