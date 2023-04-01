import IComponent from '../interfaces/IComponent.mjs';
import BaseActionButton from '../abstracts/BaseActionButton.mjs';

class BookActionButtonComponent extends BaseActionButton implements IComponent {
  constructor(
    label: string,
    action: (...args: any[]) => {},
    isDisabled: boolean
  ) {
    super(label, action, isDisabled);
  }

  getElement(): HTMLElement {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('btn', 'book__action');
    buttonElement.textContent = this.label;
    buttonElement.disabled = this.isDisabled;
    return buttonElement;
  }
}

export default BookActionButtonComponent;
