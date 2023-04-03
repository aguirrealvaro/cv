/* eslint-disable @typescript-eslint/no-var-requires */
const PACKAGE = require("./package.json");

module.exports = {
  compiler: {
    styledComponents: true,
  },
  env: {
    APP_VERSION: PACKAGE.version,
  },
  async headers() {
    return [
      {
        source: "/fonts/raleway/Raleway-Regular.ttf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/raleway/Raleway-Medium.ttf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/raleway/Raleway-SemiBold.ttf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/raleway/Raleway-Bold.ttf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};
