import { Collection, MongoClient } from "mongodb";
import { type IRepository } from "../interface/repository.ts";
import { type Product } from "../types/product.ts";
import DatabaseConnectionError from "../errs/databaseConnectionError.ts";
import InvalidProductError from "../errs/invalidProduct.ts";

export default class MongoRepository implements IRepository<Product> {
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
      //collection.insertOne({ initialize: true });

      this.instance = collection;

      return this.instance;
    } catch (err) {
      throw new DatabaseConnectionError("error to connect to mongodb!");
    }
  }

  async save(product: Product): Promise<void> {
    if (!product.name || !product.category || !product.price) {
      throw new InvalidProductError("verify the product data and try again!");
    }
    const productSaved = await this.instance.insertOne(product);
    if (!productSaved) throw new Error("fail to inser product");
  }

  async findAll(): Promise<[Product]> {
    const cursor = this.instance.find({});
    const products: any = [];
    for await (const item of cursor) {
      products.push(item);
    }
    return products;
  }
}
