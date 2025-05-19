export class AppError extends Error {
  public readonly statusCode: number;
  public readonly name: string;
  public readonly details?: any;

  constructor(message: string, statusCode = 400, details?: any) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);

    this.name = new.target.name;
    this.statusCode = statusCode;
    this.details = details;

    Error.captureStackTrace(this, this.constructor);
  }
}