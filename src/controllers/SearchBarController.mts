import IController from '../interfaces/IController.mjs';
import LibraryController from './LibraryController.mjs';
import ElementSearchBar from '../enums/ElementSearchBar.mjs';
import BooksService from '../services/BookService.mjs';

class SearchBarController implements IController {
  private HTMLElements: Map<string, HTMLElement | null> = new Map();
  private libraryController: LibraryController;
  private booksService: BooksService;

  constructor(
    libraryController: LibraryController,
    booksService: BooksService
  ) {
    this.libraryController = libraryController;
    this.booksService = booksService;
    this.initializeHTMLElements();
    this.initializeEventListeners();
  }

  private initializeHTMLElements(): void {
    const elementsIds: ElementSearchBar[] = [
      ElementSearchBar.SearchForm,
      ElementSearchBar.SearchButton,
      ElementSearchBar.SearchTitleInput,
    ];

    elementsIds.forEach((elementId: ElementSearchBar) => {
      this.HTMLElements.set(elementId, document.getElementById(elementId));
    });
  }

  private initializeEventListeners(): void {
    this.initializeSearchFormEventListeners();
  }

  private initializeSearchFormEventListeners(): void {
    this.HTMLElements.get(ElementSearchBar.SearchForm)?.addEventListener(
      'submit',
      this.handleSearchFormSubmit.bind(this)
    );
  }

  private handleSearchFormSubmit(event: Event) {
    event.preventDefault();
    const formElement: HTMLFormElement = this.HTMLElements.get(
      ElementSearchBar.SearchForm
    ) as HTMLFormElement;
    const formData = new FormData(formElement);
    const searchTitleInputValue =
      formData.get(ElementSearchBar.SearchTitleInput) ?? '';
    this.libraryController.fillBookGrid(
      this.booksService.readBooksByTitle(searchTitleInputValue as string)
    );
  }
}

export default SearchBarController;
