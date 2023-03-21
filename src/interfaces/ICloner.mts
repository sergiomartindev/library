interface ICloner {
  getDeepClone<T>(object: T): T;
}

export default ICloner;