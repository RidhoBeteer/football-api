const express = require("express");
const Router = express.Router();

const leaguesController = require("../controllers/leagues.controller");
const validateParams = require("../middleware/validateParams");
const {
  leagueIdSchema,
  seasonDetailSchema,
} = require("../utils/validationSchema");

Router.get(
  "/:leagueId",
  validateParams(leagueIdSchema),
  leaguesController.getLeagueDetails
);

Router.get(
  "/:leagueId/seasons",
  validateParams(leagueIdSchema),
  leaguesController.getLeagueSeasons
);

Router.get(
  "/:leagueId/season/:seasonId",
  validateParams(seasonDetailSchema),
  leaguesController.getLeagueSelectedSeason
);

module.exports = Router;
