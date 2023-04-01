import Crypto from '../variations/Crypto.mjs';
import User from '../classes/User.mjs';
import IFactory from '../interfaces/IFactory.mjs';
import BaseUser from '../abstracts/BaseUser.mjs';

class UsersFactory implements IFactory<BaseUser> {
  create(name: string, email: string): BaseUser {
    const userId = new Crypto().getUUID();
    return new User(name, email, userId);
  }
}

export default UsersFactory;
