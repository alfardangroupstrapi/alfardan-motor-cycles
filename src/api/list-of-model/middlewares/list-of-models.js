"use strict";

/**
 * `list-of-models` middleware
 */

const populate = {
  brandFamily: {
    populate: {
      brands: {
        populate: true,
      },
      modal_family: {
        populate: true,
      },
    },
  },
  headerHero: {
    populate: {
      heroImage: {
        populate: true,
      },
      heroVideo: {
        populate: true,
      },
      buttonLink: {
        populate: true,
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In list-of-models-populate middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
  };
};
