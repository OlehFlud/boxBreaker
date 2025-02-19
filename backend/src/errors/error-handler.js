export class ErrorHandler extends Error {
  constructor(status, msg, code) {
    super(msg);
    this.message = msg;
    this.status = status;
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
  }
};

export const errorHandler = new ErrorHandler();
