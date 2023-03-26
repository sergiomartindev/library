import IBorrowing from '../interfaces/IBorrowing.mjs';
import BorrowingStatus from '../enums/BorrowingStatus.mjs';
import IRepository from '../interfaces/IRepository.mjs';

class BorrowingService {
  private repository: IRepository<IBorrowing>;

  constructor(repository: IRepository<IBorrowing>) {
    this.repository = repository;
  }

  createBorrowing(bookId: string, userId: string): IBorrowing {
    return this.repository.create(bookId, userId);
  }

  readBorrowingById(id: string): IBorrowing[] {
    return this.repository.read(({ id: borrowingId }) => borrowingId === id);
  }

  updateBorrowing(id: string, status: BorrowingStatus): IBorrowing {
    return this.repository.update(id, status);
  }

  deleteBorrowingById(id: string): IBorrowing[] {
    return this.repository.delete(id);
  }
}

export default BorrowingService;
