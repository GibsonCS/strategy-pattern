export interface IRepository<T> {
  save(user: T): Promise<void>;
  findAll(): Promise<[T]>;
  connect(): Promise<unknown>;
}
