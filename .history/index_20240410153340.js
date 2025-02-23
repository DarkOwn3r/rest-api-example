const { checkConnection, syncModels } = require("./db/index.js");
const express = require("express");
const morgan = require("morgan");
const port = 3000;

const checkAndSync = async () => {
        await checkConnection();
        await syncModels();
};

const initAndListen = () => {
        const app = express().use(morgan("dev")).use(express.json()).listen(port, () => {
            console.log(`> Running and listening on port: ${port}`);
        });
};

const startAPI = async () => {
    await checkAndSync();
    initAndListen();
};

startAPI();