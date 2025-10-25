const wrapper = require("../utils/wrapper");
const competitionsModel = require("../models/competitions-model");
const getSupabaseClient = require("../configs/supabaseClient");

module.exports = {
  getAllCompetitions: async (req, res) => {
    try {
      const result = await competitionsModel.getAllCompetitions();

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
  getCompetitionDetails: async (req, res) => {
    try {
      const { competitionId } = req.params;
      const result = await competitionsModel.getCompetitionDetails(
        competitionId
      );

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
  getCompetitionSeasons: async (req, res) => {
    try {
      const { competitionId } = req.params;
      const checkCompetition = await competitionsModel.getCountCompetition(
        competitionId
      );

      if (checkCompetition.count < 1) {
        return wrapper.response(res, 404, "Not Found", []);
      }

      const result = await competitionsModel.getCompetitionSeasons(
        competitionId
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
      return wrapper.response(res, 500, "Internal Server Error", null);
    }
  },
  getUniqueCompetition: async (req, res) => {
    try {
      const { uniqueCompetitionId } = req.params;

      const result = await competitionsModel.getUniqueCompetition(
        uniqueCompetitionId
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
      return wrapper.response(res, 500, "Internal Server Error", null);
    }
  },
  getSeasonMatches: async (req, res) => {
    try {
      const { competitionId, seasonId } = req.params;
      const result = await competitionsModel.getSeasonMatches(
        competitionId,
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
      return wrapper.response(res, 500, "Internal Server Error", null);
    }
  },
  createNewLeague: async (req, res) => {
    try {
      const userToken = req.headers.authorization?.split(" ")[1];
      const supabaseClient = getSupabaseClient(userToken);

      const { name, country } = req.body;
      const result = await competitionsModel.createNewLeague(
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
