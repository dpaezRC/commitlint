const NODE_ENVS = {
  PRODUCTION: "production",
  DEVELOPMENT: "development",
};

const RATE_LIMIT = {
  MAX_MINUTES: process.env.RATE_LIMIT_MAX_MINUTES
    ? Number(process.env.RATE_LIMIT_MAX_MINUTES)
    : 15,
  MAX_REQUESTS: process.env.RATE_LIMIT_MAX_REQUESTS
    ? Number(process.env.RATE_LIMIT_MAX_REQUESTS)
    : 100,
};

module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || NODE_ENVS.DEVELOPMENT,
  NODE_ENVS,
  RATE_LIMIT,
};
