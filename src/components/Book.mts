import IBook from '../interfaces/IBook.mjs';
import IComponent from '../interfaces/IComponent.mjs';
import BookEvent from '../enums/BookEvent.mjs';

class Book implements IComponent {
  private book: IBook;
  private actions: Map<BookEvent, (...args: any[]) => {}>;

  constructor(book: IBook, actions: Map<BookEvent, (...args: any[]) => {}>) {
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
    const bookActionElement: HTMLElement = document.createElement('button');
    bookActionElement.classList.add('book__action');
    bookActionElement.textContent = 'Test';
    bookActionElement.addEventListener('click', () => {
      this.actions.get(action)?.(this.book);
    });
    return bookActionElement;
  }
}

export default Book;
