const { checkConnection, syncModels } = require("./db/index.js");
const express = require("express");
const morgan = require("morgan");

const checkAndSync = async () => {
        await checkConnection();
        await syncModels();
};

const initAndListen = async () => {
    try {
        const app = express();
        app.use(morgan("dev"));
        app.use(express.json());
    } catch (error) {
        console.log(error);
    }
};