const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  type: {
    type: Sequelize.ENUM("siteAdmin", "customer"),
    defaultValue: "customer",
  },
  address: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
