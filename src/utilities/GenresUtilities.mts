import IBook from '../interfaces/IBook.mjs';
import Genre from '../enums/Genre.mjs';

class GenresUtilities {
  static getGenresFromBooks(books: IBook[]): Genre[] {
    const genresSet: Set<Genre> = new Set(
      books.flatMap(({ genres }) => genres)
    );

    return Array.from(genresSet);
  }
}

export default GenresUtilities;
