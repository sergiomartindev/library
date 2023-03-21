import BorrowingStatus from '../enums/BorrowingStatus.mjs';
import IBorrowing from '../interfaces/IBorrowing.mjs';
import Crypto from '../variations/Crypto.mjs';
import IEncrypter from '../interfaces/IEncrypter.mjs';

class Borrowing implements IBorrowing{
  private _id: string;
  private _bookId: string;
  private _userId: string;
  private _borrowDate: Date;
  private _status: BorrowingStatus;

  constructor(id: string, bookId: string, userId: string, borrowDate: Date) {
    this._id = id;
    this._bookId = bookId;
    this._userId = userId;
    this._borrowDate = borrowDate;
  }

  get id(): string {
    return this._id;
  }

  get bookId(): string {
    return this._bookId;
  }

  get userId(): string {
    return this._userId;
  }

  get borrowDate(): Date {
    return this._borrowDate;
  }

  get status(): BorrowingStatus {
    return this._status;
  }

  set status(status) {
    this._status = status;
  }

}

export default Borrowing;