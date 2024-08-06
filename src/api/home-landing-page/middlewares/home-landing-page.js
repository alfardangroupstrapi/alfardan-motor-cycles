'use strict';

/**
 * `home-landing-page` middleware
 */

const populate = {
  heroSlider: {
    populate: {
      sliderImage: {
        populate: true,
      },
      actions: {
        populate: true,
      },
    },
  },
  latestModelsList: {
    populate: {
      latestModel:{
        populate: true,
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In home-landing-page middleware.');
    ctx.query = { populate, ...ctx.query };

    await next();
  };
};
