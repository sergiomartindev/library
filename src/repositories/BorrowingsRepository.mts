import IBorrowing from '../interfaces/IBorrowing.mjs';
import BorrowingFactory from '../factories/BorrowingFactory.mjs';

class BorrowingRepository {
  private static borrowings: IBorrowing[] = [];

  static create(bookId: string, userId: string): IBorrowing {
    const newBorrowing: IBorrowing = BorrowingFactory.create(bookId, userId);
    BorrowingRepository.borrowings.push(newBorrowing);
    return newBorrowing;
  }    

  static read(id: string): IBorrowing | undefined {
    return BorrowingRepository.borrowings.find(({ id: borrowingId }) => borrowingId === id);
  }

  static update(id: string, newElement: IBorrowing): IBorrowing {
    const borrowingIndex = BorrowingRepository.borrowings.findIndex(({ id: borrowingId}) => borrowingId === id);
    BorrowingRepository.borrowings[borrowingIndex] = newElement;
    return newElement;
  };

  static delete(id: string): IBorrowing[] {
    const borrowingIndex = BorrowingRepository.borrowings.findIndex(({ id: borrowingId}) => borrowingId === id);
    BorrowingRepository.borrowings.splice(borrowingIndex, 1);
    return BorrowingRepository.borrowings;
  };
}

export default BorrowingRepository;