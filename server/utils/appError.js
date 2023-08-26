class appError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode || 500;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true; //Will help to determine if the error is operational or programming error

    /* When a error is created appError's creation phase will not be included to stack trace
    Which will result in a cleaner error.*/
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = appError;
