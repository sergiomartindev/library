import IBook from '../interfaces/IBook.mjs';
import BookFactory from '../factories/BookFactory.mjs';
import Genre from '../enums/Genre.mjs';
import IRepository from '../interfaces/IRepository.mjs';

class BooksRepository implements IRepository<IBook> {
  private books: IBook[] = [
    BookFactory.create('Harry Potter', 'J. K. Rowling', [0, 1]),
    BookFactory.create('Moby Dick', 'Herman Melville', [3]),
  ];

  constructor() {}

  create(title: string, author: string, genres: Genre[]): IBook {
    const newBook: IBook = BookFactory.create(title, author, genres);
    this.books.push(newBook);
    return newBook;
  }

  read(): IBook[] {
    return this.books;
  }

  readByFindCriteria(findFunction: (book: IBook) => {}): IBook | undefined {
    return this.books.find(findFunction);
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
