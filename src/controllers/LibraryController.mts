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
import IObserver from '../interfaces/IObserver.mjs';
import ISubject from '../interfaces/ISubject.mjs';
import SearchBarController from './SearchBarController.mjs';

class LibraryController implements IController, IObserver {
  public readonly HTMLElements: Map<string, HTMLElement | null> = new Map();
  private readonly booksService: BooksService;
  private readonly borrowingService: BorrowingService;
  private readonly authenticationService: AuthenticationService;
  private readonly searchBarController: ISubject;

  constructor(
    booksService: BooksService,
    borrowingService: BorrowingService,
    authenticationService: AuthenticationService,
    searchBarController: ISubject
  ) {
    this.booksService = booksService;
    this.borrowingService = borrowingService;
    this.authenticationService = authenticationService;
    this.searchBarController = searchBarController;
    this.searchBarController.registerObserver(this);
    this.initializeHTMLElements();
    this.fillBooksGrid(this.booksService.readBooks());
  }

  update(subject: ISubject) {
    if (subject instanceof SearchBarController) {
      this.handleSearchBarControllerUpdate();
    }
  }

  public initializeHTMLElements(): void {
    const elementsIds: ElementLibrary[] = [ElementLibrary.BookGrid];

    elementsIds.forEach((elementId: ElementLibrary) => {
      this.HTMLElements.set(elementId, document.getElementById(elementId));
    });
  }

  private fillBooksGrid(books: IBook[]): void {
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

  private handleSearchBarControllerUpdate() {
    const searchBarInputValue = (
      this.searchBarController as SearchBarController
    ).searchBarInputValue;
    const filteredBooks: IBook[] =
      this.booksService.readBooksByTitle(searchBarInputValue);
    this.fillBooksGrid(filteredBooks);
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
}

export default LibraryController;
