import BorrowingRepository from './repositories/BorrowingsRepository.mjs';
import BooksRepository from './repositories/BooksRepository.mjs';
import UsersRepository from './repositories/UsersRepository.mjs';
import BorrowingService from './services/BorrowService.mjs';
import BooksService from './services/BookService.mjs';
import AuthenticationService from './services/AuthenticationService.mjs';
import SearchBarController from './controllers/SearchBarController.mjs';
import LibraryController from './controllers/LibraryController.mjs';
import NavbarController from './controllers/NavbarController.mjs';
import Genre from './enums/Genre.mjs';
import BooksFactory from './factories/BooksFactory.mjs';
import BorrowingsFactory from './factories/BorrowingsFactory.mjs';
import UsersFactory from './factories/UsersFactory.mjs';

const booksFactory = new BooksFactory();
const borrowingsFactory = new BorrowingsFactory();
const usersFactory = new UsersFactory();

const usersRepository = new UsersRepository(usersFactory);
const booksRepository = new BooksRepository(booksFactory);
const borrowingRepository = new BorrowingRepository(borrowingsFactory);

const authenticationService = new AuthenticationService(usersRepository);

// Mocked user
authenticationService.signUp('sergio', 'sergio@mail.com');
authenticationService.login('sergio@mail.com');

const booksService = new BooksService(booksRepository);
// Mocked books
booksService.createBook('Moby Dick', 'Herman Nelville', [Genre.Fiction]);
booksService.createBook(
  'Strange Case of Dr Jekyll and Mr Hyde',
  'Robert Louis Stevenson',
  [Genre.Fantasy]
);
const borrowingService = new BorrowingService(borrowingRepository);

const searchBarController = new SearchBarController();
const libraryController = new LibraryController(
  booksService,
  borrowingService,
  authenticationService,
  searchBarController
);
const navbarController = new NavbarController(borrowingService);
