import BorrowingStatus from '../enums/BorrowingStatus.mjs';

interface IBorrowing {
  id: string;
  bookId: string;
  userId: string;
  borrowDate: Date;
  status: BorrowingStatus;
}

export default IBorrowing;
