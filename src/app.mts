import BorrowingRepository from './repositories/BorrowingsRepository.mjs';
import BooksRepository from './repositories/BooksRepository.mjs';
import UserRepository from './repositories/UserRepository.mjs';
import BorrowingService from './services/BorrowService.mjs';
import BooksService from './services/BookService.mjs';
import UserService from './services/UserService.mjs';
import SearchBarController from './controllers/SearchBarController.mjs';
import LibraryController from './controllers/LibraryController.mjs';
import NavbarController from './controllers/NavbarController.mjs';
import Genre from './enums/Genre.mjs';
import BookFactory from './factories/BookFactory.mjs';
import BorrowingFactory from './factories/BorrowingFactory.mjs';
import UserFactory from './factories/UserFactory.mjs';

const booksFactory = new BookFactory();
const borrowingsFactory = new BorrowingFactory();
const usersFactory = new UserFactory();

const userRepository = new UserRepository(usersFactory);
const booksRepository = new BooksRepository(booksFactory);
const borrowingRepository = new BorrowingRepository(borrowingsFactory);

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
