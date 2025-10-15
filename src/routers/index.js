const express = require("express");
const Router = express.Router();

const leaguesRouter = require("./leagues.router");
const leagueRouter = require("./league.router");
const matchRouter = require("./match.router");

Router.use("/league", leagueRouter);
Router.use("/leagues", leaguesRouter);
Router.use("/match", matchRouter);

module.exports = Router;
