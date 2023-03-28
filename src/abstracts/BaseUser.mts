abstract class BaseUser {
  private _name: string;
  private _email: string;
  private readonly _id: string;

  constructor(name: string, email: string, id: string) {
    this._name = name;
    this._email = email;
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get id(): string {
    return this._id;
  }
}

export default BaseUser;
