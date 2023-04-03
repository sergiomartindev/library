import IController from '../interfaces/IController.mjs';
import ElementSearchBar from '../enums/ElementSearchBar.mjs';
import ISubject from '../interfaces/ISubject.mjs';
import IObserver from '../interfaces/IObserver.mjs';

class SearchBarController implements IController, ISubject {
  private observers: IObserver[];
  private HTMLElements: Map<string, HTMLElement | null> = new Map();
  private _searchBarInputValue: string;

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

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  get searchBarInputValue(): string {
    return this._searchBarInputValue;
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
    this._searchBarInputValue =
      (formData.get(ElementSearchBar.SearchTitleInput) as string) ?? '';
    this.notifyObservers();
  }
}

export default SearchBarController;
