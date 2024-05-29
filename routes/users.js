const usersRouter = require('express').Router();

const {findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists, filterPassword, hashPassword} = require('../middlewares/users');
const {sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted, sendMe} = require('../controllers/users');
const { checkAuth } = require("../middlewares/auth.js");

usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);

usersRouter.post("/users", findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkAuth, hashPassword, createUser, sendUserCreated); 

usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);

usersRouter.put("/users/:id", findUserById, checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated );

usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);  

usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;