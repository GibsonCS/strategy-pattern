declare namespace NodeJS {
  interface ProcessEnv {
    POSTGRES_CONNECTION_STRING: string;
    MONGO_CONNECTION_STRING: string;
  }
}
