const { connection } = require("../../db/index.js");
const { DataTypes } = require("sequelize");

const User = connection.define("user")