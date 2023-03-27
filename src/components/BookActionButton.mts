import IComponent from '../interfaces/IComponent.mjs';
import BaseActionButton from '../abstracts/BaseActionButton.mjs';

class BookActionButton extends BaseActionButton implements IComponent {
  constructor(label: string, action: (...args: any[]) => {}) {
    super(label, action);
  }

  getElement(): HTMLElement {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('btn', 'book__action');
    buttonElement.textContent = this.label;
    return buttonElement;
  }
}

export default BookActionButton;
