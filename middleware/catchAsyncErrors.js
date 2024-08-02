// This module exports a higher-order function that catches errors in asynchronous route handlers and passes them to the Express error-handling middleware.

module.exports = (theFunc) => (req, res, next) => {
  // Promise.resolve ensures that theFunc is wrapped in a promise.
  // This allows both synchronous and asynchronous functions to be handled.
  // .catch(next) catches any errors that occur during the execution of theFunc
  // and passes them to the next middleware, which is typically the error-handling middleware.
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
