import IController from '../interfaces/IController.mjs';
import ElementGenresFilter from '../enums/ElementGenresFilter.mjs';
import Genre from '../enums/Genre.mjs';

class GenresFilterController implements IController {
  public readonly HTMLElements: Map<string, HTMLElement | null> = new Map();

  constructor() {
    this.initializeHTMLElements();
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
      // TODO: Change into a component that calls a callback on click
      const el = document.createElement('div');
      el.textContent = `${genre}`;
      genreListElement.appendChild(el);
    }
  }
}

export default GenresFilterController;
