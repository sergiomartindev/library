import BaseUser from '../abstracts/BaseUser.mjs';
import IRepository from '../interfaces/IRepository.mjs';

class AuthenticationService {
  private _loggedUser: BaseUser | undefined;
  private readonly repository: IRepository<BaseUser>;

  constructor(repository: IRepository<BaseUser>) {
    this.repository = repository;
  }

  get loggedUser(): BaseUser | undefined {
    return this._loggedUser;
  }

  signUp(name: string, email: string): BaseUser {
    return this.repository.create(name, email);
  }

  login(email: string): void {
    const foundUsers = this.repository.read(
      ({ email: userEmail }) => userEmail === email
    );

    if (!Boolean(foundUsers.length)) {
      throw new Error('User is not created');
    }

    this._loggedUser = foundUsers[0];
  }

  logout(): void {
    this._loggedUser = undefined;
  }
}

export default AuthenticationService;
