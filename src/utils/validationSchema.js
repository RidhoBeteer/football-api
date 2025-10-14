const Joi = require("joi");

module.exports = {
  leagueIdSchema: Joi.object({
    leagueId: Joi.number().integer().positive().required(),
  }),
  seasonDetailSchema: Joi.object({
    leagueId: Joi.number().integer().positive().required(),
    seasonId: Joi.number().integer().positive().required(),
  }),
  matchIdSchema: Joi.object({
    matchId: Joi.number().integer().positive().required(),
  }),
};
