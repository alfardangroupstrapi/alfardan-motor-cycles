"use strict";

/**
 * model-family router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::model-family.model-family", {
  config: {
    find: {
      middlewares: ["api::model-family.model-families"],
    },
    findOne: {
      middlewares: ["api::model-family.model-families"],
    },
  },
});
