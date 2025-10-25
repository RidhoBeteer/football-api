const express = require("express");
const Router = express.Router();

const competitionsRouter = require("./competitions-routes");
const competitionRouter = require("./competition-routes");
const uniqueCompetitionRouter = require("./unique-competition-routes");
const matchRouter = require("./match.router");

Router.use("/competition", competitionRouter);
Router.use("/competitions", competitionsRouter);
Router.use("/unique-competition", uniqueCompetitionRouter);
Router.use("/match", matchRouter);

module.exports = Router;
