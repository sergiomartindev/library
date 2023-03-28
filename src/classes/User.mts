import BaseUser from '../abstracts/BaseUser.mjs';

class User extends BaseUser {
  constructor(name: string, email: string, id: string) {
    super(name, email, id);
  }
}

export default User;
