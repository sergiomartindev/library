import Borrowing from '../classes/Borrowing.mjs';
import IBorrowing from '../interfaces/IBorrowing.mjs';
import IFactory from '../interfaces/IFactory.mjs';
import Crypto from '../variations/Crypto.mjs';

class BorrowingFactory implements IFactory<IBorrowing> {
  create(bookId, userId): IBorrowing {
    const borrowingId = new Crypto().getUUID();
    return new Borrowing(borrowingId, bookId, userId, new Date());
  }
}

export default BorrowingFactory;
