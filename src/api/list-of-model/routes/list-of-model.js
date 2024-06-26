"use strict";

/**
 * list-of-model router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::list-of-model.list-of-model", {
  config: {
    find: {
      middlewares: ["api::list-of-model.list-of-models"],
    },
  },
});
