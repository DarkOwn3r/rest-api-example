const { checkConnection, syncModels } = require("./db/index.js");

const checkAndSync = async () => {
    try {
        await checkConnection();
        await syncModels();
    } catch (error) {
        console.log(error);
    }
};

