const router = require("express").Router();
const { getAllUsers, getUserById, updateUser, deleteUser } = require("../controllers/user.controller.js");

router.get("/", getAllUsers)
router.get("/", getUserById)