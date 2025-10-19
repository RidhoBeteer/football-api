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
  getLeagueCount: (leagueId) =>
    new Promise((resolve, reject) => {
      supabase
        .from("leagues")
        .select("*", { count: "exact", head: true })
        .eq("id", leagueId)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          }
          reject(result);
        });
    }),
  getAllLeagues: () =>
    new Promise((resolve, reject) => {
      supabase
        .from("leagues")
        .select("*")
        .then((result) => {
          if (!result.error) {
            resolve(result);
          }
          reject(result);
        });
    }),
  getLeagueDetails: (leagueId) =>
    new Promise((resolve, reject) => {
      supabase
        .from("leagues")
        .select("*")
        .eq("id", leagueId)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          }
          reject(result);
        });
    }),
  getLeagueSeasons: (leagueId) =>
    new Promise((resolve, reject) => {
      supabase
        .from("competitions")
        .select("*")
        .eq("league_id", leagueId)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          }
          reject(result);
        });
    }),
  getLeagueSelectedSeason: (leagueId, seasonId) =>
    new Promise((resolve, reject) => {
      supabase
        .from("competitions")
        .select("*")
        .eq("league_id", leagueId)
        .eq("season_id", seasonId)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          }
          reject(result);
        });
    }),
  getSeasonMatches: (leagueId, seasonId) =>
    new Promise((resolve, reject) => {
      supabase
        .from("matches")
        .select(
          `
            match_id:id, match_datetime, status, attendance, home_formation, away_formation, home_score, away_score,
            home_team:teams!matches_home_team_id_fkey(id, name, country:country_assoc),
            away_team:teams!matches_away_team_id_fkey(id, name, country:country_assoc),
            competition:competitions!matches_competition_id_fkey(id, name),
            referee:referees!inner(id, name, nationality),
            venue:venues!inner(id, name, city, country, capacity)
          `
        )
        .eq("competitions.league_id", leagueId)
        .eq("competitions.season_id", seasonId)
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
        .from("leagues")
        .insert({ name, country })
        .select()
        .then((result) => {
          handleResult(result, resolve, reject);
        });
    }),
};
