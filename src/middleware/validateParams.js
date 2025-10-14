const wrapper = require("../utils/wrapper");

const validateRequest = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.params);

  if (error) {
    return wrapper.response(res, 400, "Bad Request: Invalid Parameter(s)");
  }

  next();
};

module.exports = validateRequest;
