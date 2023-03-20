import Borrowing from "../classes/Borrowing.mjs";

class BorrowingFactory {
  static create(bookId, userId): Borrowing {
    return new Borrowing(bookId, userId, new Date());
  }
}

export default BorrowingFactory;