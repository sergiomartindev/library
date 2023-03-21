import IEncrypter from '../interfaces/IEncrypter.mjs';

class Crypto implements IEncrypter {
  constructor() {}

  getUUID(): string {
    return crypto.randomUUID();
  }
}

export default Crypto;
