import LibraryController from './controllers/LibraryController.mjs';
import BooksService from './services/BookService.mjs';
import BooksRepository from './repositories/BooksRepository.mjs';
import SearchBarController from './controllers/SearchBarController.mjs';
import Genre from './enums/Genre.mjs';

const booksRepository = new BooksRepository();
const booksService = new BooksService(booksRepository);

booksService.createBook('Moby Dick', 'Herman Nelville', [Genre.Fiction]);
booksService.createBook(
  'Strange Case of Dr Jekyll and Mr Hyde',
  'Robert Louis Stevenson',
  [Genre.Fiction]
);

const libraryController = new LibraryController(booksService);
const searchBarController = new SearchBarController(
  libraryController,
  booksService
);
