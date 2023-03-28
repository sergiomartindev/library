import IController from '../interfaces/IController.mjs';
import BorrowingsService from '../services/BorrowService.mjs';
import ElementNavbar from '../enums/ElementNavbar.mjs';

class NavbarController implements IController {
  public readonly HTMLElements: Map<string, HTMLElement | null> = new Map();
  private readonly borrowingsService: BorrowingsService;

  constructor(borrowingsService: BorrowingsService) {
    this.borrowingsService = borrowingsService;
    this.initializeHTMLElements();
    this.initializeEventListeners();
  }

  private initializeHTMLElements(): void {
    const elementsIds: ElementNavbar[] = [
      ElementNavbar.NavigateToBorrowingsButton,
    ];
    elementsIds.forEach((elementId: ElementNavbar) => {
      this.HTMLElements.set(elementId, document.getElementById(elementId));
    });
  }

  private initializeEventListeners(): void {
    // this.initializeSearchFormEventListeners();
    this.HTMLElements.get(
      ElementNavbar.NavigateToBorrowingsButton
    )?.addEventListener('click', () => {
      const borrowings = this.borrowingsService.readBorrowings();
      debugger;
    });
  }
}

export default NavbarController;
