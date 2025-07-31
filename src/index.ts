// import dotenv from "dotenv";
// dotenv.config();
import PostgresRepository from "./repositories/postgresRepository.ts";

const POSTGRES_URL_CONNECTION = process.env.POSTGRES_CONNECTION_STRING;

const postgres = new PostgresRepository(POSTGRES_URL_CONNECTION);

try {
  await postgres.connect();
  console.log("connection to postgress was successfuly!");
} catch (err) {
  console.log(err.message);
}
