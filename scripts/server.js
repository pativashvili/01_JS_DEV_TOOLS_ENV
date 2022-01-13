const express = require("express");
const path = require("path");
const open = require("open");
const port = 3000;
const app = express();
import webpack from "webpack";
import config from "../webpack.config";
import webpackDevMiddleware from "webpack-dev-middleware";
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../source/index.html"));
});
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler));
app.use(express.static("source"));
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
