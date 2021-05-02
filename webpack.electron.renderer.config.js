const rules = require("./webpack.electron.rules");
const plugins = require("./webpack.electron.plugins");
const path = require("path");

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src", "assets"),
      components: path.resolve(__dirname, "src", "components"),
      constants: path.resolve(__dirname, "src", "constants"),
      store: path.resolve(__dirname, "src", "store"),
      utils: path.resolve(__dirname, "src", "utils"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
};
