const path = require("path");
const webpack = require("webpack");

const ENV = process.env.NODE_ENV || "development";
const IS_PROD = ENV === "production";

module.exports = {
  entry: (() => {
    const entryPoints = [];

    if (!IS_PROD) {
      entryPoints.push("webpack-hot-middleware/client");
    }

    entryPoints.push(path.resolve(__dirname, "..", "src", "index.tsx"));

    return entryPoints;
  })(),
  mode: IS_PROD ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  name: "client",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "..", "build")
  },
  plugins: (() => {
    const plugins = [];

    if (IS_PROD) {
      //
    }

    if (!IS_PROD) {
      plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
  })(),
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
};
