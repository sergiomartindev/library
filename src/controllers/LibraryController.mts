import Book from '../components/Book.mjs';
import BooksService from '../services/BookService.mjs';
import IBook from '../interfaces/IBook.mjs';
import IComponent from '../interfaces/IComponent.mjs';

class LibraryController {
  private HTMLElements: Map<string, HTMLElement | null> = new Map();
  private booksService: BooksService;

  constructor(booksService: BooksService) {
    this.booksService = booksService;
    this.initializeHTMLElements();
    this.fillBookGrid(this.booksService.readBooks());
  }

  private initializeHTMLElements(): void {
    this.HTMLElements.set(
      'library__book-grid',
      document.getElementById('library__book-grid')
    );
  }

  private fillBookGrid(books: IBook[]): void {
    books.forEach((book) => {
      const bookComponent: IComponent = new Book(book);
      this.HTMLElements.get('library__book-grid')?.appendChild(
        bookComponent.getHTML()
      );
    });
  }
}

export default LibraryController;
