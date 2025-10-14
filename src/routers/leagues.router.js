const express = require("express");
const Router = express.Router();

const leaguesController = require("../controllers/leagues.controller");

Router.get("/", leaguesController.getAllLeagues);

module.exports = Router;
