const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const JSONMinifyPlugin = require("node-json-minify");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "[name].[contenthash].js",
    filename: "bundle.min.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src", "assets"),
      components: path.resolve(__dirname, "src", "components"),
      context: path.resolve(__dirname, "src", "context"),
      themes: path.resolve(__dirname, "src", "themes"),
      utils: path.resolve(__dirname, "src", "utils"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },

  plugins: [
    new CopyPlugin({
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
              return JSONMinifyPlugin(content.toString());
            }
            return content;
          },
        },
      ],
    }),
  ],
};
