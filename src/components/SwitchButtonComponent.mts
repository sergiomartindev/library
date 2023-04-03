import IComponent from '../interfaces/IComponent.mjs';

class SwitchButtonComponent implements IComponent {
  private label: string;
  private isActive: boolean;

  constructor(label: string, isActive: boolean) {
    this.label = label;
    this.isActive = isActive;
  }

  public getElement(): HTMLElement {
    const element: HTMLElement = document.createElement('div');
    element.classList.add('genre-filters__filter');
    element.textContent = this.label;

    return element;
  }
}

export default SwitchButtonComponent;
