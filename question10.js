// Fråga 10. (3p) 
// Moduler och använda klasser
// Använd ES6 moduler för att importera klasserna Book och Author från question9.js
// Skapa en författare och lägg till minst två böcker till författaren.
// Skriv ut författarens böcker och information om böckerna, samt författarens namn

// ✅ Importerar klasserna med ES6-moduler
import { Book, Author } from "./question9";

const author = new Author("Astrid Lindgren");
author.addBook(new Book("Pippi Långstrump", "Astrid Lindgren", 5));
author.addBook(new Book("Emil i Lönneberga", "Astrid Lindgren", 4));

console.log(author.name);
author.listBooks();
author.books.forEach((book) => book.displayBook());
