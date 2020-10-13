const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

const copyWebpackPlugin = new CopyWebpackPlugin({
  patterns: [
    {
      from: "**/*.(jpe?g|png|gif)",
      to: "assets",
      context: "src/assets",
    },
    {
      from: "**/*.*",
      to: ".",
      context: "src/static",
    },
  ],
});

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: "fusliez notes",
  minify: isProduction,
  template: path.resolve(__dirname, "src", "templates", "index.template.html"),
});

const cleanWebpackPlugin = new CleanWebpackPlugin();

module.exports = [cleanWebpackPlugin, copyWebpackPlugin, htmlWebpackPlugin];
