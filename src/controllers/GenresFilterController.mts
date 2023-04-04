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
  private switchButtonComponentElements: HTMLElement[];

  constructor() {
    this.observers = [];
    this.switchButtonComponentElements = [];
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

  private initializeHTMLElements(): void {
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
    const notifyObserversMethod = this.notifyObservers.bind(this);

    for (const switchButtonComponentElement of this
      .switchButtonComponentElements) {
      switchButtonComponentElement.removeEventListener(
        'click',
        notifyObserversMethod
      );
    }

    for (const genre of genres) {
      const switchButtonComponent = new SwitchButtonComponent(
        GenresUtilities.getGenreLabel(genre),
        true
      );
      const switchButtonComponentElement = switchButtonComponent.getElement();
      this.switchButtonComponentElements.push(switchButtonComponentElement);
      genreListElement.appendChild(switchButtonComponentElement);
      switchButtonComponentElement.addEventListener(
        'click',
        notifyObserversMethod
      );
    }
  }
}

export default GenresFilterController;
