"use strict";

/**
 * our-store-location router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::our-store-location.our-store-location",
  {
    config: {
      find: {
        middlewares: ["api::our-store-location.store-locations"],
      },
    },
  }
);
