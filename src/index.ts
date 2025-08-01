// import PostgresRepository from "./repositories/postgresRepository.ts";
import MongoRepository from "./repositories/mongoRepository.ts";
import { type Product } from "./types/product.ts";

const MONGO_URL_CONNECTION = process.env.MONGO_CONNECTION_STRING || "";

const mongo = new MongoRepository(MONGO_URL_CONNECTION);

const product: Product = {
  name: "Sabao",
  category: "limpeza",
  price: 6.56,
};
