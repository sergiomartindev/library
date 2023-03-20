import IBook from '../interfaces/IBook.mjs'
import BookFactory from '../factories/BookFactory.mjs';
import Genre from '../enums/Genre.mjs';

class BooksRepository {
  private static books: IBook[] = [];

  static create(title: string, author: string, genres: Genre[]): IBook {
    const newBook: IBook = BookFactory.create(title, author, genres);
    BooksRepository.books.push(newBook);
    return newBook;
  }

  static read(id: string): IBook | undefined {
    return BooksRepository.books.find(({ id: bookId }) => bookId === id);
  }

  static update(id: string, title: string, author: string, genres: Genre[]): IBook {
    const bookIndex = BooksRepository.books.findIndex(({ id: bookId}) => bookId === id);

    const bookToUpdate = BooksRepository.books[bookIndex];

    if (title) {
      bookToUpdate.title = title;
    }
    
    if (author) {
        bookToUpdate.author = author;
    }
    
    if (genres.length) {
        bookToUpdate.genres = genres;
    }

    return bookToUpdate;
  };

  static delete(id: string): IBook[] {
    const bookIndex = BooksRepository.books.findIndex(({ id: bookId}) => bookId === id);
    BooksRepository.books.splice(bookIndex, 1);
    return BooksRepository.books;
  };

  static readByFilterCriteria(filterFunction: (IBook) => {}): IBook[] {
    return BooksRepository.books.filter(filterFunction);
  }
}

export default BooksRepository;