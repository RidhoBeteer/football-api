const wrapper = require("../utils/wrapper");

module.exports = {
  signInUser: async (req, res) => {
    try {
      return res.status(200).json({
        message: "signin route",
      });
    } catch (err) {
      console.log(err);
      return wrapper.response(res, 500, "Internal Server Error", null);
    }
  },
  signUpUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.table({ email, password });
    } catch (err) {
      console.log(err);
      return wrapper.response(res, 500, "Internal Server Error", null);
    }
  },
};
