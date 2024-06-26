"use strict";

/**
 * `lifestyles` middleware
 */

const populate = {
  brand: {
    populate: true,
  },
  category: {
    populate: true,
  },
  subCategory: {
    populate: {
      icon: {
        populate: true,
      },
    },
  },
  featuredImage: {
    populate: true,
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In lifestyles middleware.");
    ctx.query = { populate, ...ctx.query };

    await next();
  };
};
