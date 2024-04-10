const { checkConnection, syncModels } = require("./db/index.js");
const User = require('./api/models/user.model.js');
const express = require("express");
const morgan = require("morgan");
const port = 3000;

const checkAndSync = async () => {
    await checkConnection();
    await syncModels();
};

const initAndListen = () => {
    const app = express()
        .use(morgan("dev"))
        .use(express.json())
        .use("/api", require("./api/routes/index.js"))
        .listen(port, () => {
            console.log(`> Running and listening on port: ${port}`);
        });
};

const startAPI = async () => {
    await checkAndSync();
    initAndListen();
};

startAPI();