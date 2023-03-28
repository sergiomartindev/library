import BaseUser from '../abstracts/BaseUser.mjs';
import IRepository from '../interfaces/IRepository.mjs';
import UserFactory from '../factories/UserFactory.mjs';

class UserRepository implements IRepository<BaseUser> {
  private readonly users: BaseUser[] = [];

  create(name: string, email: string): BaseUser {
    const newUser = UserFactory.create(name, email);
    this.users.push(newUser);
    return newUser;
  }

  read(filterFunction?: (user: BaseUser) => {}): BaseUser[] {
    if (filterFunction) {
      return this.users.filter(filterFunction);
    }
    return this.users;
  }

  update(id: string, name: string, email: string): BaseUser {
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

  delete(id: string): BaseUser[] {
    const userIndex = this.users.findIndex(({ id: userId }) => userId === id);
    this.users.splice(userIndex, 1);
    return this.users;
  }
}

export default UserRepository;
