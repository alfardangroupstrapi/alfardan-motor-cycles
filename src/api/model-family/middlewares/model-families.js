"use strict";

/**
 * `model-families` middleware
 */

const populate = {
  brands: {
    populate: true,
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In model-families middleware.");
    ctx.query = { populate, ...ctx.query };

    await next();
  };
};
