const createError = require("http-errors");

// MAKE ENV_VARIABLE ACCESSIBLE
require("dotenv").config();

// POOL IS CREATED HERE----DB CONNECTION
const pool = require("./DB/dbConnection");
pool.getConnection((err, connection) => {
  if (err) {
    console.log("fail to get connection olgy");
  } else {
    console.log("connection retrieved");
    connection.release();
    console.log("connection realease");
  }
});
// IMPORT CORS TO ALLOW HTTP REQUEST
const cors = require("cors");

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// ----------------------IMPORT ALL APP ROUTERS---------------------------
const usersRouter = require("./routes/users");
const songsRouter = require("./routes/songs");
const app = express();

// SET CORS OPTIONS FOR HTTP REQUEST
const ORIGIN = () => {
  if (process.env.MIOM_ORIGIN_CALL) {
    return process.env.MIOM_ORIGIN_CALL;
  }
  return "https://www.olgymiom.com";
};
const corsOptions = {
  origin: ORIGIN(),
  optionsSuccessStatus: 200,
};
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// USE CORS FOR HTT REQUEST
// corsOptions
// ------------------------------SERVE STATIC FILE FOLDER---------------------------
app.use(express.static(path.join(__dirname, "build")));
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// ---------------USE ALL APP ROUTERS, --> MUST START WITH /api------------------
app.use("/api/users", usersRouter);
app.use("/api/songs", songsRouter);

// ---------------------SERVE STATIC FILE ROUTES--------------------------------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
