const supabase = require("../configs/supabase");

module.exports = {
  testModel: () =>
    new Promise((resolve, reject) => {
      supabase
        .from("Referees")
        .select("*")
        .eq("id", 1)
        .then((result) => {
          if (!result.error) {
            reject(result);
          }

          resolve(result);
        });
    }),
};
