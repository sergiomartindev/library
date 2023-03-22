import LibraryController from './controllers/LibraryController.mjs';
import BooksService from './services/BookService.mjs';
import BooksRepository from './repositories/BooksRepository.mjs';
import SearchBarController from './controllers/SearchBarController.mjs';

const booksRepository = new BooksRepository();
const booksService = new BooksService(booksRepository);
const libraryController = new LibraryController(booksService);
const searchBarController = new SearchBarController(
  libraryController,
  booksService
);
