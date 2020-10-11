const path = require("path");
const plugins = require("./webpack.plugins");

module.exports = {
  plugins,

  mode: process.env.NODE_ENV || "development",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
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
      components: path.resolve(__dirname, "src", "components"),
      context: path.resolve(__dirname, "src", "context"),
      themes: path.resolve(__dirname, "src", "themes"),
      utils: path.resolve(__dirname, "src", "utils"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: 1234,
    open: true,
  },
};
