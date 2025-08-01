export default class InvalidProductError extends Error {
  constructor(messageError: string) {
    super(messageError);
    this.name = "InvalidProductError";
  }
}
