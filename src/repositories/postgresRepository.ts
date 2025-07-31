import { type IRepository } from "../interface/repository.ts";
import knex from "knex";

type User = {
  name: string;
  username: string;
  password: string;
};

export default class PostgresRepository implements IRepository<User> {
  private instance;
  private connectString: string;

  constructor(connectString: string) {
    this.connectString = connectString;
  }

  save(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<[User]> {
    throw new Error("Method not implemented.");
  }

  connect(): Promise<unknown> {
    this.instance = knex({
      client: "pg",
      connection: this.connectString,
    });

    return this.instance.raw("select 1+1 as result");
  }
}
