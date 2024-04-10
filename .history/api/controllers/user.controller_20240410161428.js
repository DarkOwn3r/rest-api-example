const User = require("../models/user.model.js");

const getAllUsers = async (request, response) => {
    try {
        const users = await User.findAll();
        response.status(200).json(users);
    } catch (error) {
        response.status(404).send(error);
    }
};