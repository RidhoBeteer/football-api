const wrapper = require("../utils/wrapper");
const leaguesModel = require("../models/leagues.model");

module.exports = {
  getAllLeagues: async (req, res) => {
    try {
      const result = await leaguesModel.getAllLeagues();

      if (result.error) {
        return wrapper.response(
          res,
          result.status,
          result.statusText,
          result.data
        );
      }

      return wrapper.response(
        res,
        result.status,
        result.statusText,
        result.data
      );
    } catch (err) {
      return wrapper.response(res, err.status, err.statusText, err.data);
    }
  },
  getLeagueDetails: async (req, res) => {
    try {
      const { leagueId } = req.params;
      const result = await leaguesModel.getLeagueDetails(leagueId);
      console.log(result);
    } catch (err) {
      return wrapper.response(res, err.status, err.statusText, err.data);
    }
  },
};
