"use strict";

/**
 * lifestyle router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::lifestyle.lifestyle", {
  config: {
    find: {
      middlewares: ["api::lifestyle.lifestyles"],
    },
  },
});
