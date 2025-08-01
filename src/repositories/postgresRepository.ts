import { type IRepository } from "../interface/repository.ts";
import knex from "knex";
import { type User } from "../types/user.ts";
import InvalidUserError from "../errs/invalidUser.ts";

export default class PostgresRepository implements IRepository<User> {
  private instance;
  private connectString: string;

  constructor(connectString: string) {
    this.connectString = connectString;
  }

  async save(user: User): Promise<void> {
    if (!user.name || !user.username || !user.password) {
      throw new InvalidUserError("check the user and try again");
    }

    return this.instance("users").insert(user);
  }

  async findAll(): Promise<[User]> {
    const users = this.instance.select().from("users");
    return users;
  }

  async connect(): Promise<unknown> {
    this.instance = knex({
      client: "pg",
      connection: this.connectString,
    });

    return this.instance.raw("select 1+1 as result");
  }
}
