import IBorrowing from "../interfaces/IBorrowing.mjs";
import BorrowingRepository from "../repositories/BorrowingsRepository.mjs";
import BorrowingStatus from "../enums/BorrowingStatus.mjs";

class BorrowService {
  static createBorrow(bookId: string, userId: string): IBorrowing {
    return BorrowingRepository.create(bookId, userId);
  }

  static searchBorrowingById(borrowingId: string): IBorrowing | undefined {
    return BorrowingRepository.read(borrowingId);
  } 

  updateBorrowing(borrowingId: string, status: BorrowingStatus): IBorrowing {
    return BorrowingRepository.update(borrowingId, status);
  }
}

export default BorrowService;