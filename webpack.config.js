const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
  },
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
    filename: "bundle-beta.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
};
