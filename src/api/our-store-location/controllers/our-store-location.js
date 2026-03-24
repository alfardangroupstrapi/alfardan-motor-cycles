"use strict";

/**
 * our-store-location controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::our-store-location.our-store-location",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: {
          locations: {
            populate: {
              days_hours: true,
            },
          },
        },
      };

      return await super.find(ctx);
    },
  })
);
