"use strict";

/**
 * list-of-model controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::list-of-model.list-of-model",
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;
      strapi.log.info(`Find query: ${JSON.stringify(query)}`);

      // Customize the find logic here if needed
      const entities = await strapi.entityService.findMany(
        "api::list-of-model.list-of-model",
        query
      );

      strapi.log.info(`Entities found: ${JSON.stringify(entities)}`);
      return this.transformResponse(entities);
    },
  })
);
