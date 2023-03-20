import IEncrypter from '../interfaces/IEncrypter.mjs';

class Crypto implements IEncrypter {
  static getUUID(): string {
    return crypto.randomUUID();
  }
}

export default Crypto;