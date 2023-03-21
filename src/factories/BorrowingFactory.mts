import Borrowing from '../classes/Borrowing.mjs';
import Crypto from '../variations/Crypto.mjs';

class BorrowingFactory {
  static create(bookId, userId): Borrowing {
    const borrowingId = new Crypto().getUUID();
    return new Borrowing(borrowingId, bookId, userId, new Date());
  }
}

export default BorrowingFactory;
