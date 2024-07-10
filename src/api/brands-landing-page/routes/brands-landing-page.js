"use strict";

/**
 * brands-landing-page router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::brands-landing-page.brands-landing-page",
  {
    config: {
      find: {
        middlewares: ["api::brands-landing-page.brands-landing-page"],
      },
    },
  }
);
