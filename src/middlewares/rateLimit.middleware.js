const expressRateLimit = require('express-rate-limit');
const {
  RATE_LIMIT: { MAX_MINUTES, MAX_REQUESTS },
} = require('../config');

const rateLimit = expressRateLimit({
  windowMs: MAX_MINUTES * 60 * 1000,
  max: MAX_REQUESTS,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => {
    res.status(429).json({
      error: {
        message: `You have exceeded the maximum of ${MAX_REQUESTS} requests in ${MAX_MINUTES} minutes.`,
        statusCode: 429,
      },
    });
  },
});

module.exports = rateLimit;
