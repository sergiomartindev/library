import IBook from "../interfaces/IBook.mjs";
import Genre from "../enums/Genre.mjs";
import Crypto from "../variations/Crypto.mjs";
import Cloner from "../variations/Cloner.mjs";
import IEncrypter from '../interfaces/IEncrypter.mjs';
import ICloner from "../interfaces/ICloner.mjs";

class Book implements IBook {
  private _id: string;
  private _title: string;
  private _author: string;
  private _genres: Genre[];

  constructor(title: string, author: string, genres: Genre[]) {
    const crypto: IEncrypter = new Crypto();
    const cloner: ICloner = new Cloner();
    
    this._id = crypto.getUUID();
    this._title = title;
    this._author = author;
    this._genres = cloner.getDeepClone(genres);
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get author(): string {
    return this._author;
  }

  set author(author: string) {
    this._author = author;
  }

  get genres(): Genre[] {
    return this._genres;
  }

  set genres(genres: Genre[]) {
    this._genres = genres;
  }
}

export default Book;