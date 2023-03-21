import IBook from '../interfaces/IBook.mjs';
import BookFactory from '../factories/BookFactory.mjs';
import Genre from '../enums/Genre.mjs';
import IRepository from '../interfaces/IRepository.mjs';

class BooksRepository implements IRepository<IBook> {
  private books: IBook[] = [];

  constructor() {}

  create(title: string, author: string, genres: Genre[]): IBook {
    const newBook: IBook = BookFactory.create(title, author, genres);
    this.books.push(newBook);
    return newBook;
  }

  read(id: string): IBook | undefined {
    return this.books.find(({ id: bookId }) => bookId === id);
  }

  readByFilterCriteria(filterFunction: (book: IBook) => {}): IBook[] {
    return this.books.filter(filterFunction);
  }

  update(id: string, title: string, author: string, genres: Genre[]): IBook {
    const bookIndex = this.books.findIndex(({ id: bookId }) => bookId === id);
    const bookToUpdate = this.books[bookIndex];

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
  }

  delete(id: string): IBook[] {
    const bookIndex = this.books.findIndex(({ id: bookId }) => bookId === id);
    this.books.splice(bookIndex, 1);
    return this.books;
  }
}

export default BooksRepository;
