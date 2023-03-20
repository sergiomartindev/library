import Book from '../classes/Book.mjs'
import Genre from '../enums/Genre.mjs';

class BookFactory {
  static create(title: string, author: string, genres: Genre[] = []): Book {
    return new Book(title, author, genres);
  }
}

export default BookFactory;