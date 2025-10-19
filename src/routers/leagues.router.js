const express = require("express");
const Router = express.Router();

const leaguesController = require("../controllers/leagues.controller");
const { validateBody } = require("../middleware/validateRequests");
const { leagueTableSchema } = require("../utils/validationSchema");

Router.get("/", leaguesController.getAllLeagues);
Router.post(
  "/",
  validateBody(leagueTableSchema),
  leaguesController.createNewLeague
);

module.exports = Router;
