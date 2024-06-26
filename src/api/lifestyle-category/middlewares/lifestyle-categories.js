"use strict";

/**
 * `lifestyle-categories` middleware
 */
const populate = {
  subCategories: {
    populate: {
      icon: {
        populate: true,
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In lifestyle-categories middleware.");
    ctx.query = { populate, ...ctx.query };

    await next();
  };
};
