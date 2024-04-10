const { Sequelize } = require('sequelize');
const connection = new Sequelize("restAPIdb", "pablo", "reboot", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: false
});
