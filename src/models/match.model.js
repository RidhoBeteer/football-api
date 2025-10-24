const supabase = require("../configs/supabase");

module.exports = {
  getMatchCount: (matchId) =>
    new Promise((resolve, reject) => {
      supabase
        .from("matches")
        .select("*", { count: "exact", head: true })
        .eq("id", matchId)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          }
          reject(result);
        });
    }),
  getMatchDetails: (matchId) =>
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
        .eq("id", matchId)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          }
          reject(result);
        });
    }),
  getShotsOnMatch: (matchId) =>
    new Promise((resolve, reject) => {
      supabase
        .from("shots")
        .select()
        .eq("match_id", matchId)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          }
          reject(result);
        });
    }),
};
