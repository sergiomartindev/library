interface IRepository<T> {
  create(...args: any[]): T;
  read(): T[];
  update(...args: any[]): T;
  delete(id: string): T[];
  readByFindCriteria(findFunction: (el: T) => {}): T | undefined;
  readByFilterCriteria(filterFunction: (el: T) => {}): T[];
}

export default IRepository;
