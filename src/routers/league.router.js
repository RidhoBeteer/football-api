const express = require("express");
const Router = express.Router();

const leaguesController = require("../controllers/leagues.controller");

Router.get("/:leagueId", leaguesController.getLeagueDetails);

module.exports = Router;
