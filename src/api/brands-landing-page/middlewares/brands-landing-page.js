"use strict";

/**
 * `brands-landing-page` middleware
 */

const populate = {
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
  listOfAvailableModels: {
    populate: true,
  },
  parallaxBannerSection: {
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
  knowMoreSection: {
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
  footerWidgets: {
    populate: {
      socialMediaLinks: {
        populate: true,
      },
      menuLinks: {
        populate: true,
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In brands-landing-page middleware.");
    ctx.query = { populate, ...ctx.query };

    await next();
  };
};
