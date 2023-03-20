import IBorrowing from "../interfaces/IBorrowing.mjs";
import BorrowingRepository from "../repositories/BorrowingsRepository.mjs";

class BorrowService {
  static createBorrow(bookId: string, userId: string): IBorrowing {
    return BorrowingRepository.create(bookId, userId);
  }

  static searchBorrowingById(borrowingId: string): IBorrowing | undefined {
    return BorrowingRepository.read(borrowingId);
  } 
}

export default BorrowService;