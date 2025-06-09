const { status: httpStatus } = require('http-status');
const logger = require('../utils/logger.util');
const { NODE_ENV, NODE_ENVS } = require('../config');

class ApiError extends Error {
  /**
   * @param {{
   *   statusCode?: number,
   *   message?: string,
   *   isOperational?: boolean,
   *   stack?: string,
   *   internalCode?: string
   * }} options
   */
  constructor({
    statusCode = httpStatus.INTERNAL_SERVER_ERROR,
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR],
    isOperational = true,
    stack = '',
    internalCode,
  } = {}) {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.internalCode = internalCode;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this);
    }
  }
}

/**
 * Middleware de manejo centralizado de errores
 * @param {Error} err
 * @param {import('express').Request} _req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} _next
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _req, res, _next) => {
  let { statusCode, message } = err;
  if (!err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = message ?? httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }
  if (!message) {
    message = httpStatus[statusCode];
  }
  const error = {
    message,
    statusCode,
  };
  if (err?.stack && NODE_ENV === NODE_ENVS.DEVELOPMENT) {
    error.stack = err?.stack;
  }
  if (err?.internalCode) {
    error.internalCode = err.internalCode;
  }
  logger.error(err);

  return res.status(statusCode).json({ error });
};

module.exports = {
  ApiError,
  errorHandler,
};
