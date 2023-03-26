import Book from '../components/Book.mjs';
import BooksService from '../services/BookService.mjs';
import IBook from '../interfaces/IBook.mjs';
import IComponent from '../interfaces/IComponent.mjs';
import ElementLibrary from '../enums/ElementLibrary.mjs';
import IController from '../interfaces/IController.mjs';
import BookEvent from '../enums/BookEvent.mjs';

class LibraryController implements IController {
  // Readonly so I prevent them from being accidentally modified after initialization
  public readonly HTMLElements: Map<string, HTMLElement | null> = new Map();
  private readonly booksService: BooksService;

  constructor(booksService: BooksService) {
    this.booksService = booksService;
    this.initializeHTMLElements();
    this.fillBooksGrid(this.booksService.readBooks());
  }

  public initializeHTMLElements(): void {
    const elementsIds: ElementLibrary[] = [ElementLibrary.BookGrid];

    elementsIds.forEach((elementId: ElementLibrary) => {
      this.HTMLElements.set(elementId, document.getElementById(elementId));
    });
  }

  public fillBooksGrid(books: IBook[]): void {
    const bookGridElement = this.HTMLElements.get(ElementLibrary.BookGrid);

    if (!bookGridElement) {
      throw new Error(
        `The element with ID '${ElementLibrary.BookGrid}' was not found in the DOM or is not an HTMLElement.`
      );
    }

    bookGridElement.innerHTML = '';

    for (const book of books) {
      const bookActions: Map<BookEvent, (...args: any[]) => {}> = new Map();
      bookActions.set(BookEvent.Delete, this.handleDeleteBook.bind(this));
      bookActions.set(BookEvent.Borrow, this.handleBorrowBook.bind(this));
      const bookComponent: IComponent = new Book(book, bookActions);
      this.HTMLElements.get(ElementLibrary.BookGrid)?.appendChild(
        bookComponent.getElement()
      );
    }
  }

  private handleDeleteBook(book: IBook) {
    this.booksService.deleteBook(book.id);
    this.fillBooksGrid(this.booksService.readBooks());
  }

  private handleBorrowBook(book: IBook) {
    debugger;
  }
}

export default LibraryController;
