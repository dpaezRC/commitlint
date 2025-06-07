require("dotenv").config(); 
const express = require("express");
const morgan = require("morgan");
const { PORT, NODE_ENV } = require("./config");

const app = express();

app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server started in ${NODE_ENV} mode`);
  console.log(`Server running at http://localhost:${PORT}`);
});
