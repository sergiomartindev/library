import BaseUser from '../abstracts/BaseUser.mjs';
import IRepository from '../interfaces/IRepository.mjs';
import IFactory from '../interfaces/IFactory.mjs';

class UsersRepository implements IRepository<BaseUser> {
  private readonly users: BaseUser[] = [];
  private readonly usersFactory: IFactory<BaseUser>;

  constructor(usersFactory: IFactory<BaseUser>) {
    this.usersFactory = usersFactory;
  }

  public create(name: string, email: string): BaseUser {
    const newUser = this.usersFactory.create(name, email);
    this.users.push(newUser);
    return newUser;
  }

  public read(filterFunction?: (user: BaseUser) => {}): BaseUser[] {
    if (filterFunction) {
      return this.users.filter(filterFunction);
    }
    return this.users;
  }

  public update(id: string, name: string, email: string): BaseUser {
    const userIndex = this.users.findIndex(({ id: userId }) => userId === id);
    const userToUpdate = this.users[userIndex];

    if (name) {
      userToUpdate.name = name;
    }

    if (email) {
      userToUpdate.email = email;
    }

    return userToUpdate;
  }

  public delete(id: string): BaseUser[] {
    const userIndex = this.users.findIndex(({ id: userId }) => userId === id);
    this.users.splice(userIndex, 1);
    return this.users;
  }
}

export default UsersRepository;
