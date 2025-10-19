const wrapper = require("../utils/wrapper");
const leaguesModel = require("../models/leagues.model");
const getSupabaseClient = require("../configs/supabaseClient");

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
      return response.wrapper(res, 500, "Internal Server Error", null);
    }
  },
  getSeasonMatches: async (req, res) => {
    try {
      const { leagueId, seasonId } = req.params;
      const result = await leaguesModel.getSeasonMatches(leagueId, seasonId);
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
      return wrapper.response(res, 500, "Internal Server Error", null);
    }
  },
  createNewLeague: async (req, res) => {
    try {
      const userToken = req.headers.authorization?.split(" ")[1];
      const supabaseClient = getSupabaseClient(userToken);

      const { name, country } = req.body;
      const result = await leaguesModel.createNewLeague(
        supabaseClient,
        name,
        country
      );

      if (result.error) {
        return wrapper.response(
          res,
          result.status,
          `${result.statusText}: ${result.error.message}`,
          []
        );
      }

      return wrapper.response(res, 200, result.statusText, result.data);
    } catch (err) {
      return wrapper.response(res, 500, "Internal Server Error", null);
    }
  },
};
