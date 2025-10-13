const express = require("express");
const Router = express.Router();

const model = require("../models/testModel");
const wrapper = require("../utils/wrapper");

Router.get("/", async (req, res) => {
  try {
    const test = await model.testModel();
    console.log(test);
    if (test.error) {
      return wrapper.response(res, test.status, test.statusText, err.data);
    }

    return wrapper.response(res, test.status, test.statusText, test.data);
  } catch (err) {
    console.log(err);
    return wrapper.response(res, err.status, err.statusText, err.data);
  }
});

module.exports = Router;
