// Fråga 9. (4p) OOP & Javascript
// Du ska skapa två klasser med ES6 syntax, Book och Author.

// Book ska ha följande egenskaper:
// title, author, rating
// och metoden displayBook som visar information om boken

// Author ska ha följande egenskaper:
// name, 
// books (en array med böcker som är tom från början)
// och metoden
// addBook som lägger till en bok till författarens lista
// listBooks som visar en lista på författarens böcker

// ✅ Ren objektorienterad design med ES6-klasser
class Book {
  constructor(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
  }

  displayBook() {
    console.log(`${this.title} av ${this.author}, betyg: ${this.rating}`);
  }
}

class Author {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBooks() {
    this.books.forEach(function (book) {
      console.log(`${this.name}: ${book.title}`);
    });
  }
}
