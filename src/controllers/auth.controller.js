const authModel = require("../models/auth.model");
const wrapper = require("../utils/wrapper");

module.exports = {
  signInUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await authModel.signInUser(email, password);
      return wrapper.response(res, 200, "OK", result);
    } catch (err) {
      console.log(err);
      return wrapper.response(res, 500, "Internal Server Error", null);
    }
  },
  signUpUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await authModel.signUpUser(email, password);
      if (result.error) {
        return wrapper.response(
          res,
          result.error.status || 400,
          "User Already Exists",
          null
        );
      }
      return wrapper.response(res, 200, "OK", result.data);
    } catch (err) {
      return wrapper.response(res, 500, "Internal Server Error", null);
    }
  },
};
