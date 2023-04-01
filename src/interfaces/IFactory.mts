interface IFactory<T> {
  create(...args: any[]): T;
}

export default IFactory;
