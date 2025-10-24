const wrapper = require("../utils/wrapper");
const matchModel = require("../models/match.model");

module.exports = {
  getMatchDetails: async (req, res) => {
    try {
      const { matchId } = req.params;

      const result = await matchModel.getMatchDetails(matchId);

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
  getShotsOnMatch: async (req, res) => {
    try {
      const { matchId } = req.params;
      const isExist = await matchModel.getMatchCount(matchId);
      if (isExist.count < 1) {
        return wrapper.response(res, 404, "Not Found", []);
      }

      const result = await matchModel.getShotsOnMatch(matchId);
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
};
