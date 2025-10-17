require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const wrapper = require("./utils/wrapper");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const mainRouter = require("./routers/index");
const authRouter = require("./routers/auth.router");

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/api", mainRouter);

app.use((req, res) => {
  return wrapper.response(res, 404, "Not Found", []);
});

app.listen(port, host, () => {
  console.log(`Server listening at http://${host}:${port}`);
});
