"use strict";

/**
 * brands-landing-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::brands-landing-page.brands-landing-page",
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;
      strapi.log.info(`Find query: ${JSON.stringify(query)}`);

      // Customize the find logic here if needed
      const entities = await strapi.entityService.findMany(
        "api::brands-landing-page.brands-landing-page",
        query
      );

      strapi.log.info(`Entities found: ${JSON.stringify(entities)}`);
      return this.transformResponse(entities);
    },
  })
);
