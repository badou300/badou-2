const books = require('./library.json');

function nbLivres(stock) {
  return stock.length;
}

function listerTousLesTitres(stock) {
  stock.forEach((book) => {
    console.log(book.title);
  });
}

function ajouterLivre(stock, title, author, genre, pages, language, year) {
  const nouveauLivre = {
    title,
    author,
    genre,
    pages,
    language,
    year
  };
  stock.push(nouveauLivre);
  return stock;
}

function supprimerLivre(stock, index) {
  stock.splice(index, 1);
}

function mettreAJourTitre(stock, index, newTitle) {
  stock[index].title = newTitle;
}

function listerLivresEnAnglais(stock) {
  const livresEnAnglais = stock.filter((book) => book.language === 'English');
  listerTousLesTitres(livresEnAnglais);
}

function listerLivresPlusDe300Pages(stock) {
  const livresPlusDe300Pages = stock.filter((book) => book.pages > 300);
  listerTousLesTitres(livresPlusDe300Pages);
}

function livresEntre2000Et2010(stock) {
  return stock.filter((book) => book.year > 2000 && book.year <= 2010);
}

function livresFantasyEnAnglais(stock) {
  return stock.filter((book) => book.genre === 'Fantasy' && book.language === 'English');
}

function bookContainingRide(stock) {
  return stock.find((book) => book.title.toLowerCase().includes('ride'));
}

console.log("Nombre de livres:", nbLivres(books));

console.log("Tous les titres-------------------:");
listerTousLesTitres(books);

console.log("Ajout d'un livre------------------:");
ajouterLivre(books, 'badou', 'badouride', 'Fantasy', 300, 'English', 2002);
listerTousLesTitres(books);

console.log("Suppression d'un livre------------:");
supprimerLivre(books, 0);
listerTousLesTitres(books);

console.log("Mise à jour du titre--------------:");
mettreAJourTitre(books, 0, "Nouveau Titre");
listerTousLesTitres(books);

console.log("Livres en anglais-----------------:");
listerLivresEnAnglais(books);

console.log("Livres de plus de 300 pages-------:");
listerLivresPlusDe300Pages(books);

console.log("Livres entre 2000 et 2010--------:");
listerTousLesTitres(livresEntre2000Et2010(books));

console.log("Livres de fantasy en anglais-----:");
listerTousLesTitres(livresFantasyEnAnglais(books));

console.log("Livre contenant 'ride'-----------:", bookContainingRide(books));
