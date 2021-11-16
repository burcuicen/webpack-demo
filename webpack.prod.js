const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');
//const path = require("path");

module.exports = merge(common, {
    mode: "production",
    output: {
      filename: "main.[contenthash].js",
      path: path.resolve(__dirname, "dist")
  },
  plugins: [new CleanWebpackPlugin()]
  
});