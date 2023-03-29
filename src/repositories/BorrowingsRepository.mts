import IBorrowing from '../interfaces/IBorrowing.mjs';
import BorrowingFactory from '../factories/BorrowingFactory.mjs';
import BorrowingStatus from '../enums/BorrowingStatus.mjs';
import IRepository from '../interfaces/IRepository.mjs';

class BorrowingRepository implements IRepository<IBorrowing> {
  private borrowings: IBorrowing[] = [];

  public create(bookId: string, userId: string): IBorrowing {
    const newBorrowing: IBorrowing = BorrowingFactory.create(bookId, userId);
    this.borrowings.push(newBorrowing);
    return newBorrowing;
  }

  public read(filterFunction?: (borrowing: IBorrowing) => {}): IBorrowing[] {
    if (filterFunction) {
      return this.borrowings.filter(filterFunction);
    }
    return this.borrowings;
  }

  public update(id: string, status: BorrowingStatus): IBorrowing {
    const borrowingIndex = this.borrowings.findIndex(
      ({ id: borrowingId }) => borrowingId === id
    );
    const borrowingToUpdate = this.borrowings[borrowingIndex];

    if (status) {
      borrowingToUpdate.status = status;
    }

    return borrowingToUpdate;
  }

  public delete(id: string): IBorrowing[] {
    const borrowingIndex = this.borrowings.findIndex(
      ({ id: borrowingId }) => borrowingId === id
    );
    this.borrowings.splice(borrowingIndex, 1);
    return this.borrowings;
  }
}

export default BorrowingRepository;
