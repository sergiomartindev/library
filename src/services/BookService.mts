import Genre from '../enums/Genre.mjs';
import IBook from '../interfaces/IBook.mjs';
import IRepository from '../interfaces/IRepository.mjs';

class BookService {
  private repository: IRepository<IBook>;

  constructor(repository: IRepository<IBook>) {
    this.repository = repository;
  }

  createBook(title: string, author: string, genres: Genre[]) {
    return this.repository.create(title, author, genres);
  }

  searchBookById(id: string): IBook | undefined {
    return this.repository.read(id);
  }

  searchBooksByTitle(title: string): IBook[] {
    const filterFunction = ({ title: bookTitle }): boolean => bookTitle.includes(title);
    return this.repository.readByFilterCriteria(filterFunction);
  }

  searchBooksByGenre(genre: Genre): IBook[] {
    const filterFunction = ({ genres: bookGenres }): boolean => bookGenres.some(bookGenre => bookGenre === genre);
    return this.repository.readByFilterCriteria(filterFunction);
  }

  searchBooksByAuthor(author: string): IBook[] {
    const filterFunction = ({ author: bookAuthor}): boolean => bookAuthor.includes(author);
    return this.repository.readByFilterCriteria(filterFunction);
  }

  updateBook(id: string, title: string, author: string, genres: Genre[]): IBook {
    return this.repository.update(id, title, author, genres);
  }
}

export default BookService;