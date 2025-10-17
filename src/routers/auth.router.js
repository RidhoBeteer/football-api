const express = require("express");
const Router = express.Router();

const authController = require("../controllers/auth.controller");

Router.post("/signin", authController.signInUser);

Router.post("/signup", authController.signUpUser);

module.exports = Router;
