export class HttpError extends Error {
  public message: string;
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }

  public getHttpCode(): number {
    return this.statusCode;
  }
}
