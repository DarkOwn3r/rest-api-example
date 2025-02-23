const { Sequelize } = require('sequelize');
const connection = new Sequelize("restAPIdb", "username", "password", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: false
});

async function checkConnection() {
    try {
        await connection.authenticate();
        console.log("Connection with Database succesfully");
    } catch (error) {
        console.log(error);
    }
};

async function syncModels() {
    try {
        await connection.sync();
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    connection,
    checkConnection,
    syncModels,
};