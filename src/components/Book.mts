import IBook from '../interfaces/IBook.mjs';
import IComponent from '../interfaces/IComponent.mjs';

class Book implements IComponent {
  private book: IBook;

  constructor(book: IBook) {
    this.book = book;
  }

  getHTML(): HTMLElement {
    const bookElement: HTMLElement = document.createElement('div');
    bookElement.innerHTML = `
      <div class="book library__book">
        <h2 class="book__title library__book-title">${this.book.title}</h2>
        <p class="book__author library__book-author">${this.book.author}</p>
      </div>`;

    return bookElement;
  }
}

export default Book;
