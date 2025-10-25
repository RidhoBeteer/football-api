const express = require("express");
const Router = express.Router();

const competitionsController = require("../controllers/competitions-controller");
const { validateParams } = require("../middleware/validateRequests");
const {
  competitionIdSchema,
  seasonDetailSchema,
} = require("../utils/validationSchema");

Router.get(
  "/:competitionId",
  validateParams(competitionIdSchema),
  competitionsController.getCompetitionDetails
);

Router.get(
  "/:competitionId/seasons",
  validateParams(competitionIdSchema),
  competitionsController.getCompetitionSeasons
);

Router.get(
  "/:competitionId/season/:seasonId",
  validateParams(seasonDetailSchema),
  competitionsController.getUniqueCompetition
);

Router.get(
  "/:competitionId/season/:seasonId/matches",
  validateParams(seasonDetailSchema),
  competitionsController.getSeasonMatches
);

module.exports = Router;
