import ICloner from "../interfaces/ICloner.mjs";

class Cloner implements ICloner {
  static getDeepClone(object) {
    return structuredClone(object);
  }
}

export default Cloner;