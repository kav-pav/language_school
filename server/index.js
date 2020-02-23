// Express server

require("dotenv").config();

const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");

const config = require("./config");
const api = require("./api");

const app = next({ dev: config.DEV });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use((req, res, doNext) => {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, Set-Cookie"
    );
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }
    doNext();
  });

  //   server.use(cookieParser());

  server.use("/api", bodyParser.json(), api);

  // Helper function for throwing 404's from Next pages
  server.get("*", async (req, res, doNext) => {
    req.throw404 = function throw404() {
      const err = new Error();
      err.code = "ENOENT";
      throw err;
    };
    doNext();
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(config.PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${config.PORT}`);
    console.log("design 1920x1080");
  });
});
