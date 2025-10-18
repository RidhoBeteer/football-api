const supabase = require("../configs/supabase");

module.exports = {
  signInUser: (email, password) =>
    new Promise((resolve, reject) => {
      supabase.auth
        .signInWithPassword({
          email: email,
          password: password,
        })
        .then((result) => {
          resolve(result);
        });
    }),
  signUpUser: (email, password) =>
    new Promise((resolve, reject) => {
      supabase.auth
        .signUp({
          email: email,
          password: password,
        })
        .then((result) => {
          resolve(result);
        });
    }),
};
