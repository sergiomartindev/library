import Book from '../components/Book.mjs';
import BooksService from '../services/BookService.mjs';
import IBook from '../interfaces/IBook.mjs';
import IComponent from '../interfaces/IComponent.mjs';
import ElementLibrary from '../enums/ElementLibrary.mjs';
import IController from '../interfaces/IController.mjs';

class LibraryController implements IController {
  public HTMLElements: Map<string, HTMLElement | null> = new Map();
  private booksService: BooksService;

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
    const bookGridElement = this.HTMLElements.get(ElementLibrary.BookGrid) as
      | HTMLElement
      | undefined;

    if (bookGridElement) {
      bookGridElement.innerHTML = '';
      books.forEach((book) => {
        const bookComponent: IComponent = new Book(book);
        this.HTMLElements.get(ElementLibrary.BookGrid)?.appendChild(
          bookComponent.getHTML()
        );
      });
    } else {
      console.error(
        `The element with ID '${ElementLibrary.BookGrid}' was not found in the DOM or is not an HTMLElement.`
      );
    }
  }
}

export default LibraryController;
