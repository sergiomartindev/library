import Crypto from '../variations/Crypto.mjs';
import User from '../classes/User.mjs';

class UserFactory {
  static create(name: string, email: string): User {
    const userId = new Crypto().getUUID();
    return new User(name, email, userId);
  }
}

export default UserFactory;
