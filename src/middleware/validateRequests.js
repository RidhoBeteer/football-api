const wrapper = require("../utils/wrapper");

module.exports = {
  validateParams: (schema) => (req, res, next) => {
    const { error } = schema.validate(req.params);
    if (error) {
      return wrapper.response(res, 400, "Bad Request", error.details);
    }

    next();
  },
  validateBody: (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return wrapper.response(res, 400, "Bad Request", error.details);
    }

    next();
  },
  validateQuery: (schema) => (req, res, next) => {
    const { error } = schema.validate(req.query, { abortEarly: false });
    if (error) {
      return wrapper.response(res, 400, "Bad Request", error.details);
    }

    next();
  },
};
