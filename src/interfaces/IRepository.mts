interface IRepository<T> {
  create(...args: any[]): T;
  read(id: string): T | undefined;
  update(...args: any[]): T;
  delete(id: string): T[];
  readByFilterCriteria(filterFunction: (el: T) => {}): T[];
}

export default IRepository;
