import { Collection, MongoClient } from "mongodb";
import { type IRepository } from "../interface/repository.ts";
import { type User } from "../types/user.ts";
import DatabaseConnectionError from "../errs/databaseConnectionError.ts";
import InvalidUserError from "../errs/invalidUser.ts";

export default class MongoRepository implements IRepository<User> {
  private instance: Collection;
  private connectionString: string;
  private collection = "products";
  private dbName = "marketing";

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  async connect(): Promise<Collection> {
    try {
      const client = new MongoClient(this.connectionString);
      await client.connect();

      console.log("connect to mongodb");

      const database = client.db(this.dbName);
      const collection = database.collection(this.collection);

      //Necessary for create database and collection
      collection.insertOne({ initialize: true });

      this.instance = collection;

      return this.instance;
    } catch (err) {
      throw new DatabaseConnectionError("error to connect to mongodb!");
    }
  }

  async save(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<[User]> {
    throw new Error("Method not implemented.");
  }
}
