import BookComponent from '../components/BookComponent.mjs';
import BooksService from '../services/BookService.mjs';
import BorrowingService from '../services/BorrowService.mjs';
import IBook from '../interfaces/IBook.mjs';
import IComponent from '../interfaces/IComponent.mjs';
import ElementLibrary from '../enums/ElementLibrary.mjs';
import IController from '../interfaces/IController.mjs';
import BookEvent from '../enums/BookEvent.mjs';
import BookActionButtonComponent from '../components/BookActionButtonComponent.mjs';
import BaseActionButton from '../abstracts/BaseActionButton.mjs';
import AuthenticationService from '../services/AuthenticationService.mjs';
import GenresUtilities from '../utilities/GenresUtilities.mjs';
import GenresFilterController from './GenresFilterController.mjs';

class LibraryController implements IController {
  public readonly HTMLElements: Map<string, HTMLElement | null> = new Map();
  private readonly booksService: BooksService;
  private readonly borrowingService: BorrowingService;
  private readonly authenticationService: AuthenticationService;
  private readonly genresFilterController: GenresFilterController;

  constructor(
    booksService: BooksService,
    borrowingService: BorrowingService,
    authenticationService: AuthenticationService,
    genresFilterController: GenresFilterController
  ) {
    this.booksService = booksService;
    this.borrowingService = borrowingService;
    this.authenticationService = authenticationService;
    this.genresFilterController = genresFilterController;
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
    this.genresFilterController.fillGenreList(
      GenresUtilities.getGenresFromBooks(books)
    );
    const bookGridElement = this.HTMLElements.get(ElementLibrary.BookGrid);

    if (!bookGridElement) {
      throw new Error(
        `The element with ID '${ElementLibrary.BookGrid}' was not found in the DOM or is not an HTMLElement.`
      );
    }

    bookGridElement.innerHTML = '';

    for (const book of books) {
      const bookComponent: IComponent = new BookComponent(
        book,
        this.getBookAtions(book)
      );
      bookGridElement.appendChild(bookComponent.getElement());
    }
  }

  private handleDeleteBook(book: IBook) {
    this.booksService.deleteBook(book.id);
    this.fillBooksGrid(this.booksService.readBooks());
  }

  private handleBorrowBook(book: IBook) {
    if (!this.authenticationService.loggedUser) {
      throw new Error('No user logged');
    }

    this.borrowingService.createBorrowing(
      book.id,
      this.authenticationService.loggedUser.id
    );
    this.fillBooksGrid(this.booksService.readBooks());
  }

  private getBookAtions(
    book: IBook
  ): Map<BookEvent, BaseActionButton & IComponent> {
    const bookActions: Map<BookEvent, BaseActionButton & IComponent> =
      new Map();
    bookActions.set(
      BookEvent.Delete,
      new BookActionButtonComponent(
        'Delete',
        this.handleDeleteBook.bind(this),
        false
      )
    );
    const borrowButtonIsDisabled: boolean = Boolean(
      this.borrowingService.readBorowingByBookId(book.id).length
    );
    bookActions.set(
      BookEvent.Borrow,
      new BookActionButtonComponent(
        'Borrow',
        this.handleBorrowBook.bind(this),
        borrowButtonIsDisabled
      )
    );
    return bookActions;
  }
}

export default LibraryController;
