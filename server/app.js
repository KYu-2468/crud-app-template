const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
module.exports = app;

// static file-serving middleware
app.use(express.static(path.join(__dirname, "../client/build")));

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());

// default index.html
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
