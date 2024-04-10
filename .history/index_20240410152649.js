const { checkConnection, syncModels } = require("./db/index.js");
const express = require("express");

const checkAndSync = async () => {
        await checkConnection();
        await syncModels();
};

const initAndListen = async () => {
    try {
        const app = express();
    } catch (error) {
        console.log(error);
    }
};