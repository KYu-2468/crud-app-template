const Sequelize = require("sequelize");
const { name } = require("../../package.json");
require("dotenv").config();

let databaseURL = null;

const config = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

if (process.env.NODE_ENV === "production" && process.env.DATABASE_URL) {
  databaseURL = process.env.DATABASE_URL;

  //https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
} else {
  databaseURL = `postgres://localhost:5432/${name}`;
}

const db = new Sequelize(databaseURL, config);

module.exports = db;
