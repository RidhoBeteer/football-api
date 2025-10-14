const supabase = require("../configs/supabase");

module.exports = {
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
};
