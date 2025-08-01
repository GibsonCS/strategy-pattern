import PostgresRepository from "./repositories/postgresRepository.ts";
import MongoRepository from "./repositories/mongoRepository.ts";
import DatabaseContext from "./strategy/databaseContext.ts";

const MONGO_URL_CONNECTION = process.env.MONGO_CONNECTION_STRING || "";
const POSTGRES_URL_CONNECTION = process.env.POSTGRES_CONNECTION_STRING || "";

const postgresContext = new DatabaseContext(
  new PostgresRepository(POSTGRES_URL_CONNECTION)
);
const mongodbContext = new DatabaseContext(
  new MongoRepository(MONGO_URL_CONNECTION)
);

const data = [
  {
    name: "Sabao",
    category: "limpeza",
    price: 6.56,
    type: "logger",
  },
  {
    name: "Gibson",
    username: "gibson.cruz",
    password: "1111",
    type: "register",
  },
];

const contextType = {
  logger: mongodbContext,
  register: postgresContext,
};

for (const { type, ...item } of data) {
  const context = contextType[type];
  await context.connect();
  await context.save(item);

  console.log(type, context.dbContext.constructor.name);
  console.log(await context.findAll());
}
