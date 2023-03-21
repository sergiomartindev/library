class User {
  private _email: string;
  private _name: string;

  constructor(email: string, name: string) {
    this._email = email;
    this._name = name;
  }

  get email(): string {
    return this._email;
  }

  get name(): string {
    return this._name;
  }
}

export default User;
