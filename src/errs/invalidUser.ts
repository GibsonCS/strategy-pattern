export default class InvalidUserError extends Error {
  name: string;
  constructor(errorMessage: string) {
    super(errorMessage);
    this.name = "InvalidUserError";
  }
}
