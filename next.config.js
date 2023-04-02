/* eslint-disable @typescript-eslint/no-var-requires */
const PACKAGE = require("./package.json");

module.exports = {
  compiler: {
    styledComponents: true,
  },
  env: {
    APP_VERSION: PACKAGE.version,
  },
};
