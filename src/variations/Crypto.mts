import IEncrypter from '../interfaces/IEncrypter.mjs';

class Crypto implements IEncrypter {
  constructor() {}

  getUUID(): string {
    return window.crypto.randomUUID();
  }
}

export default Crypto;
