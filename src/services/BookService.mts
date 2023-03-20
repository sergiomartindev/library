import Genre from '../enums/Genre.mjs';
import IBook from '../interfaces/IBook.mjs';
import BooksRepository from '../repositories/BooksRepository.mjs';

class BookService {
  static createBook(title: string, author: string, genres: Genre[]) {
    return BooksRepository.create(title, author, genres);
  }

  static searchBookById(id: string): IBook | undefined {
    return BooksRepository.read(id);
  }

  static searchBooksByTitle(title: string): IBook[] {
    const filterFunction = ({ title: bookTitle }): boolean => bookTitle.includes(title);
    return BooksRepository.readByFilterCriteria(filterFunction);
  }

  static searchBooksByGenre(genre: Genre): IBook[] {
    const filterFunction = ({ genres: bookGenres }): boolean => bookGenres.some(bookGenre => bookGenre === genre);
    return BooksRepository.readByFilterCriteria(filterFunction);
  }

  static searchBooksByAuthor(author: string): IBook[] {
    const filterFunction = ({ author: bookAuthor}): boolean => bookAuthor.includes(author);
    return BooksRepository.readByFilterCriteria(filterFunction);
  }

  static updateBook(id: string, title: string, author: string, genres: Genre[]): IBook {
    return BooksRepository.update(id, title, author, genres);
  }
}

export default BookService;