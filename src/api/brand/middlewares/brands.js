"use strict";

/**
 * `brands` middleware
 */

const populate = {
  logo: {
    populate: true,
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In brands middleware.");
    ctx.query = { populate, ...ctx.query };

    await next();
  };
};
