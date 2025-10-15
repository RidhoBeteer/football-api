const supabase = require("../configs/supabase");

module.exports = {
  getMatchDetails: (matchId) =>
    new Promise((resolve, reject) => {
      supabase
        .from("matches")
        .select()
        .eq("id", matchId)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          }
          reject(result);
        });
    }),
};
