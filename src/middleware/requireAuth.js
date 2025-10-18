const supabase = require("../configs/supabase");
const wrapper = require("../utils/wrapper");

const requireAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return wrapper.response(res, 401, "Unauthorized: No token provided", []);
  }

  const token = authHeader.split(" ")[1];
  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data?.user) {
    return wrapper.response(res, 401, "Unauthorized: Invalid token", []);
  }
  req.user = data.user;
  next();
};

module.exports = requireAuth;
