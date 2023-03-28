import LibraryController from './controllers/LibraryController.mjs';
import BooksService from './services/BookService.mjs';
import BorrowingService from './services/BorrowService.mjs';
import BooksRepository from './repositories/BooksRepository.mjs';
import BorrowingRepository from './repositories/BorrowingsRepository.mjs';
import SearchBarController from './controllers/SearchBarController.mjs';
import Genre from './enums/Genre.mjs';
import UserService from './services/UserService.mjs';
import UserRepository from './repositories/UserRepository.mjs';
import NavbarController from './controllers/NavbarController.mjs';

// window.onerror = function (message, source, line, column, error) {
//   console.error('An error occurred: ', message, source, line, column, error);
// };

const userRepository = new UserRepository();
const booksRepository = new BooksRepository();
const borrowingRepository = new BorrowingRepository();

const userService = new UserService(userRepository);

userService.signUp('sergio', 'sergio@mail.com');
userService.login('sergio@mail.com');

const booksService = new BooksService(booksRepository);

// Mocked books
booksService.createBook('Moby Dick', 'Herman Nelville', [Genre.Fiction]);
booksService.createBook(
  'Strange Case of Dr Jekyll and Mr Hyde',
  'Robert Louis Stevenson',
  [Genre.Fiction]
);

const borrowingService = new BorrowingService(borrowingRepository);

const libraryController = new LibraryController(
  booksService,
  borrowingService,
  userService
);
const searchBarController = new SearchBarController(
  libraryController,
  booksService
);
const navbarController = new NavbarController(borrowingService);
