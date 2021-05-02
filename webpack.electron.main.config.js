module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: "./src/electron/index.ts",
  // Put your normal webpack config below here
  module: {
    rules: require("./webpack.electron.rules"),
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
  target: "electron-main",
  node: {
    global: true,
    __dirname: true,
    __filename: true,
  },
};
