const { connection } = require("../../db/index.js");
const { DataTypes } = require("sequelize");

const User = connection.define('user', {
    "firstName": {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [3, 10]
        }
    },
    "lastName": {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }

});