import Genre from '../enums/Genre.mjs';
import IBook from '../interfaces/IBook.mjs';
import IRepository from '../interfaces/IRepository.mjs';

class BooksService {
  private repository: IRepository<IBook>;

  constructor(repository: IRepository<IBook>) {
    this.repository = repository;
  }

  createBook(title: string, author: string, genres: Genre[]) {
    return this.repository.create(title, author, genres);
  }

  readBooks(): IBook[] {
    return this.repository.read();
  }

  readBookById(id: string): IBook[] | undefined {
    const findFunction = ({ id: bookId }): boolean => bookId === id;
    return this.repository.read(findFunction);
  }

  readBooksByGenre(genre: Genre): IBook[] {
    const filterFunction = ({ genres: bookGenres }): boolean =>
      bookGenres.some((bookGenre) => bookGenre === genre);
    return this.repository.read(filterFunction);
  }

  readBooksByGenres(genres: Genre[]): IBook[] {
    const filterFunction = ({ genres: bookGenres }): boolean =>
      bookGenres.some((bookGenre) => genres.includes(bookGenre));

    return this.repository.read(filterFunction);
  }

  readBooksByTitle(title: string): IBook[] {
    const filterFunction = ({ title: bookTitle }): boolean =>
      bookTitle.toLowerCase().includes(title.toLowerCase());
    return this.repository.read(filterFunction);
  }

  readBooksByAuthor(author: string): IBook[] {
    const filterFunction = ({ author: bookAuthor }): boolean =>
      bookAuthor.includes(author);
    return this.repository.read(filterFunction);
  }

  updateBook(
    id: string,
    title: string,
    author: string,
    genres: Genre[]
  ): IBook {
    return this.repository.update(id, title, author, genres);
  }

  deleteBook(id: string): IBook[] {
    return this.repository.delete(id);
  }
}

export default BooksService;
