import IBook from '../interfaces/IBook.mjs';
import IComponent from '../interfaces/IComponent.mjs';
import BookEvent from '../enums/BookEvent.mjs';
import BaseActionButton from '../abstracts/BaseActionButton.mjs';

class BookComponent implements IComponent {
  private readonly book: IBook;
  private readonly actions: Map<BookEvent, IComponent & BaseActionButton>;

  constructor(
    book: IBook,
    actions: Map<BookEvent, IComponent & BaseActionButton>
  ) {
    this.book = book;
    this.actions = actions;
  }

  public getElement(): HTMLElement {
    const bookElement: HTMLElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.appendChild(this.getTitleElement());
    bookElement.appendChild(this.getAuthorElement());
    bookElement.appendChild(this.getActionsElement());

    return bookElement;
  }

  private getTitleElement(): HTMLElement {
    const bookTitleElement: HTMLElement = document.createElement('div');
    bookTitleElement.classList.add('book__title');
    bookTitleElement.textContent = this.book.title;
    return bookTitleElement;
  }

  private getAuthorElement(): HTMLElement {
    const bookAuthorElement: HTMLElement = document.createElement('div');
    bookAuthorElement.classList.add('book__author');
    bookAuthorElement.textContent = this.book.author;
    return bookAuthorElement;
  }

  private getActionsElement(): HTMLElement {
    const bookActionsElement: HTMLElement = document.createElement('div');
    bookActionsElement.classList.add('book__actions');
    for (const action of this.actions.keys()) {
      bookActionsElement.appendChild(this.getActionElement(action));
    }
    return bookActionsElement;
  }

  private getActionElement(action: BookEvent): HTMLElement {
    const bookActionElement = this.actions.get(action)?.getElement();
    bookActionElement?.addEventListener('click', () => {
      this.actions.get(action)?.action(this.book);
    });

    return bookActionElement ?? document.createElement('button');
  }
}

export default BookComponent;
