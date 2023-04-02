import IController from '../interfaces/IController.mjs';
import LibraryController from './LibraryController.mjs';
import ElementSearchBar from '../enums/ElementSearchBar.mjs';
import BooksService from '../services/BookService.mjs';
import ISubject from '../interfaces/ISubject.mjs';
import IObserver from '../interfaces/IObserver.mjs';
import IBook from '../interfaces/IBook.mjs';

class SearchBarController implements IController, ISubject {
  private observers: IObserver[];
  private HTMLElements: Map<string, HTMLElement | null> = new Map();

  constructor() {
    this.observers = [];
    this.initializeHTMLElements();
    this.initializeEventListeners();
  }

  registerObserver(observer: IObserver) {
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver) {
    // TODO: TBD
  }

  notifyObservers(inputValue: string): void {
    for (const observer of this.observers) {
      observer.update(inputValue);
    }
  }

  private initializeHTMLElements(): void {
    const elementsIds: ElementSearchBar[] = [
      ElementSearchBar.SearchForm,
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
      (e) => e.preventDefault()
    );
    this.HTMLElements.get(ElementSearchBar.SearchTitleInput)?.addEventListener(
      'input',
      this.handleSearchTitleInput.bind(this)
    );
  }

  private handleSearchTitleInput() {
    const formElement: HTMLFormElement = this.HTMLElements.get(
      ElementSearchBar.SearchForm
    ) as HTMLFormElement;
    const formData = new FormData(formElement);
    const searchTitleInputValue =
      formData.get(ElementSearchBar.SearchTitleInput) ?? '';
    this.notifyObservers(searchTitleInputValue as string);
    // this.libraryController.fillBooksGrid(
    //   this.booksService.readBooksByTitle(searchTitleInputValue as string)
    // );
  }
}

export default SearchBarController;
