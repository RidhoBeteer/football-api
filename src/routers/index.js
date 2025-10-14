const express = require("express");
const Router = express.Router();

const leaguesRouter = require("./leagues.router");
const leagueRouter = require("./league.router");

Router.use("/league", leagueRouter);
Router.use("/leagues", leaguesRouter);

module.exports = Router;
