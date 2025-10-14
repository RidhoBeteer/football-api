const supabase = require("../configs/supabase");

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
};
