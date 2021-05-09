const webpackPrebundlePlugin = require("webpack-prebundle-plugin");
const path = require("path");

module.exports = function override(config, env) {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      new webpackPrebundlePlugin({
        vendors: {
          entries: [
            "@reduxjs/toolkit",
            "react-redux",
            "react",
            "react-dom",
            "antd",
          ],
          output: path.resolve(__dirname, "./public/vendors.js"),
        },
      }),
    ],
  };
};
