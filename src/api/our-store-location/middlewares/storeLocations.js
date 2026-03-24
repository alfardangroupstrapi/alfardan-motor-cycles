"use strict";

/**
 * `storeLocations` middleware
 */

const populate = {
  locations: {
    populate: {
      days_hours: true,
    },
  },
};

module.exports = () => {
  return async (ctx, next) => {
    strapi.log.info("In store-locations middleware");

    ctx.query = {
      ...ctx.query,
      populate,
    };

    await next();
  };
};
