const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "../src", "ssr.tsx"),
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  name: "server",
  output: {
    filename: "ssr.js",
    libraryTarget: "commonjs2",
    path: path.resolve(__dirname, "../build"),
    publicPath: "/"
  },
  plugins: [new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  target: "node"
};
