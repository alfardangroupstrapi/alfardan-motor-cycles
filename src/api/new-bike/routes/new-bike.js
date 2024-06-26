"use strict";

/**
 * new-bike router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::new-bike.new-bike", {
  config: {
    find: {
      middlewares: ["api::new-bike.new-bikes"],
    },
  },
});
