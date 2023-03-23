interface IRepository<T> {
  create(...args: any[]): T;
  read(filterFunction?: (el: T) => {}): T[];
  update(...args: any[]): T;
  delete(id: string): T[];
}

export default IRepository;
