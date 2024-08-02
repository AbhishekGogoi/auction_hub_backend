// Importing the built-in Error class in JavaScript to extend it.
class ErrorHandler extends Error {
  // Constructor method to initialize the ErrorHandler instance.
  constructor(message, statusCode) {
    //super keyword calls the constructor of parent class which is "Error"
    super(message);
    // Assign the provided statusCode to the ErrorHandler instance.
    this.statusCode = statusCode;

    // Capture the stack trace, excluding the constructor call from it.
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;
