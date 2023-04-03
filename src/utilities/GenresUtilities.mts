import IBook from '../interfaces/IBook.mjs';
import Genre from '../enums/Genre.mjs';

class GenresUtilities {
  static getGenresFromBooks(books: IBook[]): Genre[] {
    const genresSet: Set<Genre> = new Set(
      books.flatMap(({ genres }) => genres)
    );

    return Array.from(genresSet);
  }

  static getGenreLabel(genre: Genre): string {
    const labelByGenre: Record<Genre, string> = {
      [Genre.Fiction]: 'Fiction',
      [Genre.Romance]: 'Romance',
      [Genre.Historical]: 'Historical',
      [Genre.Fantasy]: 'Fantasy',
    };

    return labelByGenre[genre] ?? '';
  }
}

export default GenresUtilities;
