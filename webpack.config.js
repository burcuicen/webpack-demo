const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js", //app starting point
  output: {
    filename: "main.js", //the file that is rendered and its desired location
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            "style-loader", //3. Inject styles into DOM
            "css-loader", //2. Turns css into commonjs
            "sass-loader" //1. Turns sass into css
          ]
      }
    ]
}
};