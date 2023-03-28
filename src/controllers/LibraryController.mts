import Book from '../components/Book.mjs';
import BooksService from '../services/BookService.mjs';
import BorrowingService from '../services/BorrowService.mjs';
import IBook from '../interfaces/IBook.mjs';
import IComponent from '../interfaces/IComponent.mjs';
import ElementLibrary from '../enums/ElementLibrary.mjs';
import IController from '../interfaces/IController.mjs';
import BookEvent from '../enums/BookEvent.mjs';
import BookActionButton from '../components/BookActionButton.mjs';
import BaseActionButton from '../abstracts/BaseActionButton.mjs';
import UserService from '../services/UserService.mjs';

class LibraryController implements IController {
  public readonly HTMLElements: Map<string, HTMLElement | null> = new Map();
  private readonly booksService: BooksService;
  private readonly borrowingService: BorrowingService;
  private readonly userService: UserService;

  constructor(
    booksService: BooksService,
    borrowingService: BorrowingService,
    userService: UserService
  ) {
    this.booksService = booksService;
    this.borrowingService = borrowingService;
    this.userService = userService;
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
      const bookComponent: IComponent = new Book(
        book,
        this.getBookAtions(book)
      );
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
    if (!this.userService.loggedUser) {
      throw new Error('No user logged');
    }

    this.borrowingService.createBorrowing(
      book.id,
      this.userService.loggedUser.id
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
      new BookActionButton('Delete', this.handleDeleteBook.bind(this), false)
    );
    const borrowButtonIsDisabled: boolean = Boolean(
      this.borrowingService.readBorowingByBookId(book.id).length
    );
    bookActions.set(
      BookEvent.Borrow,
      new BookActionButton(
        'Borrow',
        this.handleBorrowBook.bind(this),
        borrowButtonIsDisabled
      )
    );
    return bookActions;
  }
}

export default LibraryController;
