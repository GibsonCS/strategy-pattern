export default class UsersNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UsersNotFountError";
  }
}
