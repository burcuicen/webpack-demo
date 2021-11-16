const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js", //app starting point
  output: {
    filename: "main.js", //the file that is rendered and its desired location
    path: path.resolve(__dirname, "dist")
  }
};