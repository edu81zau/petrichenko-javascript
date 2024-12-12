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

  module: {},
};
