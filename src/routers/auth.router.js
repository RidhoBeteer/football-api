const express = require("express");
const Router = express.Router();

const authController = require("../controllers/auth.controller");

const { validateBody } = require("../middleware/validateRequests");
const { authSchema } = require("../utils/validationSchema");

Router.post("/signin", validateBody(authSchema), authController.signInUser);

Router.post("/signup", validateBody(authSchema), authController.signUpUser);

module.exports = Router;
