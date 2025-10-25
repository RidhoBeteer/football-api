const supabase = require("../configs/supabase");

const handleResult = (result, resolve, reject) => {
  if (
    result.error &&
    result.error.status &&
    result.error.status >= 500 &&
    result.error.status < 600
  ) {
    return reject(result);
  }

  if (result.status && result.status >= 500 && result.status < 600) {
    return reject(result);
  }

  return resolve(result);
};

module.exports = {
  getCountCompetition: (competitionId) =>
    new Promise((resolve, reject) => {
      supabase
        .from("competitions")
        .select("*", { count: "exact", head: true })
        .eq("id", competitionId)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          }
          reject(result);
        });
    }),
  getAllCompetitions: () =>
    new Promise((resolve, reject) => {
      supabase
        .from("competitions")
        .select("*")
        .then((result) => {
          if (!result.error) {
            resolve(result);
          }
          reject(result);
        });
    }),
  getCompetitionDetails: (competitionId) =>
    new Promise((resolve, reject) => {
      supabase
        .from("competitions")
        .select("*")
        .eq("id", competitionId)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          }
          reject(result);
        });
    }),
  getCompetitionSeasons: (competitionId) =>
    new Promise((resolve, reject) => {
      supabase
        .from("unique_competitions")
        .select("*")
        .eq("competition_id", competitionId)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          }
          reject(result);
        });
    }),
  getUniqueCompetition: (uniqueCompetitionId) =>
    new Promise((resolve, reject) => {
      supabase
        .from("unique_competitions")
        .select("*")
        .eq("id", uniqueCompetitionId)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          }
          reject(result);
        });
    }),
  getSeasonMatches: (competitionId, seasonId) =>
    new Promise((resolve, reject) => {
      supabase
        .from("matches")
        .select(
          `
            match_id:id, match_datetime, status, home_score, away_score,
            home_team:teams!matches_home_team_id_fkey(id, name, country:country_assoc),
            away_team:teams!matches_away_team_id_fkey(id, name, country:country_assoc),
            unique_competition:unique_competitions!matches_unique_competition_id_fkey(id, name)
          `
        )
        .eq("unique_competitions.competition_id", competitionId)
        .eq("unique_competitions.season_id", seasonId)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          }
          reject(result);
        });
    }),
  createNewLeague: (supabaseClient, name, country) =>
    new Promise((resolve, reject) => {
      supabaseClient
        .from("competitions")
        .insert({ name, country })
        .select()
        .then((result) => {
          handleResult(result, resolve, reject);
        });
    }),
};
