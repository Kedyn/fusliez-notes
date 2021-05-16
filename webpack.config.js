const path = require("path");
const plugins = require("./webpack.plugins");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  plugins,

  mode: process.env.NODE_ENV || "development",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js",
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
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
      constants: path.resolve(__dirname, "src", "constants"),
      store: path.resolve(__dirname, "src", "store"),
      utils: path.resolve(__dirname, "src", "utils"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  devtool: isProduction ? "none" : "eval-cheap-module-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: 1234,
    open: true,
    host: "0.0.0.0",
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
