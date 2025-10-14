const wrapper = require("../utils/wrapper");
const leaguesModel = require("../models/leagues.model");

module.exports = {
  getAllLeagues: async (req, res) => {
    try {
      const result = await leaguesModel.getAllLeagues();

      if (result.data.length < 1) {
        return wrapper.response(res, 404, "Not Found", result.data);
      }

      return wrapper.response(
        res,
        result.status,
        result.statusText,
        result.data
      );
    } catch (err) {
      console.log(err);
      return wrapper.response(res, 500, "Internal Server Error", null);
    }
  },
  getLeagueDetails: async (req, res) => {
    try {
      const { leagueId } = req.params;
      const result = await leaguesModel.getLeagueDetails(leagueId);

      if (result.data.length < 1) {
        return wrapper.response(res, 404, "Not Found", result.data);
      }

      return wrapper.response(
        res,
        result.status,
        result.statusText,
        result.data
      );
    } catch (err) {
      console.log(err);
      return wrapper.response(res, 500, "Internal Server Error", null);
    }
  },
  getLeagueSeasons: async (req, res) => {
    try {
      const { leagueId, seasonId } = req.params;
      const checkLeague = await leaguesModel.getLeagueCount(leagueId);

      if (checkLeague.count < 1) {
        return wrapper.response(res, 404, "Not Found", []);
      }

      const result = await leaguesModel.getLeagueSeasons(leagueId);
      if (result.data.length < 1) {
        return wrapper.response(res, 404, "Not Found", []);
      }

      return wrapper.response(
        res,
        result.status,
        result.statusText,
        result.data
      );
    } catch (err) {
      console.log(err);
      return response.wrapper(res, 500, "Internal Server Error", null);
    }
  },
  getLeagueSelectedSeason: async (req, res) => {
    try {
      const { leagueId, seasonId } = req.params;

      const checkLeague = await leaguesModel.getLeagueCount(leagueId);
      if (checkLeague.count < 1) {
        return wrapper.response(res, 404, "Not Found", []);
      }

      const result = await leaguesModel.getLeagueSelectedSeason(
        leagueId,
        seasonId
      );
      if (result.data.length < 1) {
        return wrapper.response(res, 404, "Not Found", []);
      }

      return wrapper.response(
        res,
        result.status,
        result.statusText,
        result.data
      );
    } catch (err) {
      console.log(err);
      return response.wrapper(res, 500, "Internal Server Error", null);
    }
  },
};
