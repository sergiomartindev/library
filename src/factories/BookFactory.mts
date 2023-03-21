import Book from '../classes/Book.mjs';
import Genre from '../enums/Genre.mjs';
import Crypto from '../variations/Crypto.mjs';

class BookFactory {
  static create(title: string, author: string, genres: Genre[] = []): Book {
    const bookId: string = new Crypto().getUUID();
    return new Book(bookId, title, author, genres);
  }
}

export default BookFactory;
