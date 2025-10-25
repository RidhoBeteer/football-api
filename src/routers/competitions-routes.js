const express = require("express");
const Router = express.Router();

const competitionController = require("../controllers/competitions-controller");
const { validateBody } = require("../middleware/validateRequests");
const { leagueTableSchema } = require("../utils/validationSchema");

Router.get("/", competitionController.getAllCompetitions);
Router.post(
  "/",
  validateBody(leagueTableSchema),
  competitionController.createNewLeague
);

module.exports = Router;
