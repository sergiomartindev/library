import IBook from '../interfaces/IBook.mjs';
import Genre from '../enums/Genre.mjs';
import IRepository from '../interfaces/IRepository.mjs';
import IFactory from '../interfaces/IFactory.mjs';

class BooksRepository implements IRepository<IBook> {
  private books: IBook[] = [];
  private booksFactory: IFactory<IBook>;

  constructor(booksFactory: IFactory<IBook>) {
    this.booksFactory = booksFactory;
  }

  public create(title: string, author: string, genres: Genre[]): IBook {
    const newBook: IBook = this.booksFactory.create(title, author, genres);
    this.books.push(newBook);
    return newBook;
  }

  public read(filterFunction?: (book: IBook) => {}): IBook[] {
    if (filterFunction) {
      return this.books.filter(filterFunction);
    }
    return this.books;
  }

  public update(
    id: string,
    title: string,
    author: string,
    genres: Genre[]
  ): IBook {
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

  public delete(id: string): IBook[] {
    const bookIndex = this.books.findIndex(({ id: bookId }) => bookId === id);
    this.books.splice(bookIndex, 1);
    return this.books;
  }
}

export default BooksRepository;
