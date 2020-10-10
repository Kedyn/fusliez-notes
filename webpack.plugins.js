const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const JsonMinifyPlugin = require("node-json-minify");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

exports.CopyPlugin = new CopyPlugin({
  patterns: [
    {
      from: "**/*.(jpe?g|png|gif|ico)",
      to: "assets",
      context: "src/assets",
    },
    {
      from: "**/*.json",
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

exports.HtmlWebpackPlugin = new HtmlWebpackPlugin({
  title: "fusliez notes",
  minify: isProduction,
  template: path.resolve(__dirname, "src", "templates", "index.template.html"),
});
