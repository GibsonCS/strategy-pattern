import { type IRepository } from "../interface/repository.ts";

export default class DatabaseContext {
  private dbContext: IRepository<unknown>;

  constructor(dbContext: IRepository<unknown>) {
    this.dbContext = dbContext;
  }

  //   setContext(database: IRepository<unknown>) {
  //     this.dbContext = database;
  //   }

  async connect(): Promise<unknown> {
    return await this.dbContext.connect();
  }

  async save(user: unknown): Promise<void> {
    return await this.dbContext.save(user);
  }

  async findAll(): Promise<[unknown]> {
    return await this.dbContext.findAll();
  }
}
