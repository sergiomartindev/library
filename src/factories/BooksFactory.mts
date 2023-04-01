import Book from '../classes/Book.mjs';
import Genre from '../enums/Genre.mjs';
import IBook from '../interfaces/IBook.mjs';
import IFactory from '../interfaces/IFactory.mjs';
import Crypto from '../variations/Crypto.mjs';

class BooksFactory implements IFactory<IBook> {
  create(title: string, author: string, genres: Genre[] = []): IBook {
    const bookId: string = new Crypto().getUUID();
    return new Book(bookId, title, author, genres);
  }
}

export default BooksFactory;
