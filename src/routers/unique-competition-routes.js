const express = require("express");
const Router = express.Router();

const competitionsController = require("../controllers/competitions-controller");
const { validateParams } = require("../middleware/validateRequests");
const { uniqueCompetitionSchema } = require("../utils/validationSchema");

Router.get(
  "/:uniqueCompetitionId",
  validateParams(uniqueCompetitionSchema),
  competitionsController.getUniqueCompetition
);

module.exports = Router;
