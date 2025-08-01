export default class DatabaseConnectionError extends Error {
  constructor(errorMessage: string) {
    super(errorMessage);
    this.name = "DatabaseConnectionError";
  }
}
