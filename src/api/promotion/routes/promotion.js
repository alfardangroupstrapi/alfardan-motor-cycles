"use strict";

/**
 * promotion router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::promotion.promotion", {
  config: {
    find: {
      middlewares: ["api::promotion.promotions"],
    },
    findOne: {
      middlewares: ["api::promotion.promotions"],
    },
  },
});
