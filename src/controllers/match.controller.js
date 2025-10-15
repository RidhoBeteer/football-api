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
      console.log(err);
      return wrapper.response(res, 500, "Internal Server Error", null);
    }
  },
};
