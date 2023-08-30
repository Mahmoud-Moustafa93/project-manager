const path = require("path");
const cleanPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/app.ts",
  devtool: false,
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle-beta-min.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [new cleanPlugin.CleanWebpackPlugin()],
};
