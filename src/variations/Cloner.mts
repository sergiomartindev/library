import ICloner from '../interfaces/ICloner.mjs';

class Cloner implements ICloner {
  constructor() {}

  getDeepClone<T>(object: T): T {
    return window.structuredClone(object);
  }
}

export default Cloner;
