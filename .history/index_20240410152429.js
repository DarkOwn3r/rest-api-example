const { checkConnection, syncModels } = require("./db/index.js");

const checkAndSync = async () => {
    await checkConnection();
    await syncModels();
};

