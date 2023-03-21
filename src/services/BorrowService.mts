import IBorrowing from '../interfaces/IBorrowing.mjs';
import BorrowingStatus from '../enums/BorrowingStatus.mjs';
import IRepository from '../interfaces/IRepository.mjs';

class BorrowService {
  private repository: IRepository<IBorrowing>;

  constructor(repository: IRepository<IBorrowing>) {
    this.repository = repository;
  }

  createBorrow(bookId: string, userId: string): IBorrowing {
    return this.repository.create(bookId, userId);
  }

  readBorrowingById(borrowingId: string): IBorrowing | undefined {
    return this.repository.read(borrowingId);
  }

  updateBorrowing(borrowingId: string, status: BorrowingStatus): IBorrowing {
    return this.repository.update(borrowingId, status);
  }

  deleteBorrowingById(borrowingId: string): IBorrowing[] {
    return this.repository.delete(borrowingId);
  }
}

export default BorrowService;
