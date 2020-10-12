const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const JsonMinifyPlugin = require("node-json-minify");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

const copyWebpackPlugin = new CopyWebpackPlugin({
  patterns: [
    {
      from: "**/*.(jpe?g|png|gif|ico)",
      to: "assets",
      context: "src/assets",
    },
    {
      from: "**/*.(json|webmanifest)",
      to: "assets",
      context: "src/assets",
      transform: function (content) {
        if (isProduction) {
          return JsonMinifyPlugin(content.toString());
        }
        return content;
      },
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
