require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");

const { PORT, NODE_ENV, NODE_ENVS } = require("./config/env.config");
const rateLimit = require("./config/rateLimit.config");

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

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.use((_req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server started in ${NODE_ENV} mode`);
  console.log(`🌐 Listening at http://localhost:${PORT}`);
});
