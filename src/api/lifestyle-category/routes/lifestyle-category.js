"use strict";

/**
 * lifestyle-category router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::lifestyle-category.lifestyle-category",
  {
    config: {
      find: {
        middlewares: ["api::lifestyle-category.lifestyle-categories"],
      },
    },
  }
);
