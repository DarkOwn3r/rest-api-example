const router = require("express").Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/user.controller.js");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/", updateUser);
router.delete("/:id", deleteUser);