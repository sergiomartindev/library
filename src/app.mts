import LibraryController from './controllers/LibraryController.mjs';
import BooksService from './services/BookService.mjs';
import BorrowingService from './services/BorrowService.mjs';
import BooksRepository from './repositories/BooksRepository.mjs';
import BorrowingRepository from './repositories/BorrowingsRepository.mjs';
import SearchBarController from './controllers/SearchBarController.mjs';
import Genre from './enums/Genre.mjs';

// window.onerror = function (message, source, line, column, error) {
//   console.error('An error occurred: ', message, source, line, column, error);
// };

const booksRepository = new BooksRepository();
const booksService = new BooksService(booksRepository);

const borrowingRepository = new BorrowingRepository();
const borrowingService = new BorrowingService(borrowingRepository);

// Mocked books
booksService.createBook('Moby Dick', 'Herman Nelville', [Genre.Fiction]);
booksService.createBook(
  'Strange Case of Dr Jekyll and Mr Hyde',
  'Robert Louis Stevenson',
  [Genre.Fiction]
);

const libraryController = new LibraryController(booksService, borrowingService);
const searchBarController = new SearchBarController(
  libraryController,
  booksService
);
