import LibraryController from './controllers/LibraryController.mjs';
import BooksService from './services/BookService.mjs';
import BooksRepository from './repositories/BooksRepository.mjs';

const booksRepository = new BooksRepository();
const booksService = new BooksService(booksRepository);
const libraryController = new LibraryController(booksService);
