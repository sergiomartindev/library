import IController from '../interfaces/IController.mjs';
import ElementGenresFilter from '../enums/ElementGenresFilter.mjs';
import Genre from '../enums/Genre.mjs';
import ISubject from '../interfaces/ISubject.mjs';
import IObserver from '../interfaces/IObserver.mjs';
import SwitchButtonComponent from '../components/SwitchButtonComponent.mjs';
import GenresUtilities from '../utilities/GenresUtilities.mjs';

class GenresFilterController implements IController, ISubject {
  private observers: IObserver[];
  public readonly HTMLElements: Map<string, HTMLElement | null> = new Map();

  constructor() {
    this.observers = [];
    this.initializeHTMLElements();
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

  public initializeHTMLElements(): void {
    const elementsIds: ElementGenresFilter[] = [ElementGenresFilter.GenreList];

    elementsIds.forEach((elementId: ElementGenresFilter) => {
      this.HTMLElements.set(elementId, document.getElementById(elementId));
    });
  }

  public fillGenreList(genres: Genre[]) {
    const genreListElement = this.HTMLElements.get(
      ElementGenresFilter.GenreList
    );

    if (!genreListElement) {
      throw new Error(
        `The element with ID '${ElementGenresFilter.GenreList}' was not found in the DOM or is not an HTMLElement.`
      );
    }

    genreListElement.innerHTML = '';

    for (const genre of genres) {
      const switchButtonComponent = new SwitchButtonComponent(
        GenresUtilities.getGenreLabel(genre),
        true
      );
      genreListElement.appendChild(switchButtonComponent.getElement());
      genreListElement.addEventListener(
        'click',
        this.notifyObservers.bind(this)
      );
    }
  }
}

export default GenresFilterController;
