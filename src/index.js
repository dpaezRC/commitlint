require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");

const logger = require("./utils/logger.util");
const { PORT, NODE_ENV, NODE_ENVS } = require("./config");
const rateLimit = require("./middlewares/rateLimit.middleware");
const { errorHandler } = require("./middlewares/error.middleware");

const app = express();

app.use(helmet());
app.use(cors());
app.use(rateLimit);

if (NODE_ENV === NODE_ENVS.PRODUCTION) {
  app.use(morgan("combined"));
} else {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(compression());

app.get("/health", (_req, res) => res.status(200).send("OK"));

app.use((_req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});
app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`🚀 Server started in ${NODE_ENV} mode`);
  logger.info(`🌐 Listening at http://localhost:${PORT}`);
});
