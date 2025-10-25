const Joi = require("joi");

module.exports = {
  competitionIdSchema: Joi.object({
    competitionId: Joi.number().integer().positive().required(),
  }),
  seasonDetailSchema: Joi.object({
    competitionId: Joi.number().integer().positive().required(),
    seasonId: Joi.number().integer().positive().required(),
  }),
  matchIdSchema: Joi.object({
    matchId: Joi.number().integer().positive().required(),
  }),
  authSchema: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(12).required(),
  }),
  competitionTableSchema: Joi.object({
    name: Joi.string()
      .trim()
      .regex(/^[a-zA-Z0-9]+$/)
      .required(),
    country: Joi.string()
      .trim()
      .regex(/^[A-Za-z]+$/)
      .required(),
  }),
  uniqueCompetitionSchema: Joi.object({
    uniqueCompetitionId: Joi.number().integer().positive().required(),
  }),
};
