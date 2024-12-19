"use strict";

let path = require("path");

module.exports = {
  /**Есть три состояния mode
   * https://webpack.js.org/configuration/mode/#mode-none
   */
  mode: "development",
  //mode: "production",
  entry: "./src/script.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/public/js",
  },

  /**
   * Опция watch используется для отслеживания изменения в исходниках
   * https://webpack.js.org/configuration/watch/#watch
   */
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  debug: true,
                  corejs: 3,
                  useBuiltIns: "usage",
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
