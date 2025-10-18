const express = require("express");
const Router = express.Router();

const matchController = require("../controllers/match.controller");
const { validateParams } = require("../middleware/validateRequests");
const { matchIdSchema } = require("../utils/validationSchema");

Router.get(
  "/:matchId",
  validateParams(matchIdSchema),
  matchController.getMatchDetails
);

module.exports = Router;
