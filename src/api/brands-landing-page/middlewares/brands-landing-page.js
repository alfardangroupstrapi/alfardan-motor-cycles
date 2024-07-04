"use strict";

/**
 * `brands-landing-page` middleware
 */

const populate = {
  brand: {
    populate: true,
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

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In brands-landing-page-populate middleware.");
    const { query } = ctx;
    strapi.log.info(`Query before modification: ${JSON.stringify(query)}`);

    if (query["brand-id"]) {
      const brandId = query["brand-id"];
      delete query["brand-id"];

      // Apply filters to only include models with the specified brand ID
      query.filters = {
        $and: [
          query.filters || {},
          {
            brand: {
              id: brandId,
            },
          },
        ],
      };
    }

    ctx.query = { populate, ...ctx.query };
    strapi.log.info(`Query after modification: ${JSON.stringify(ctx.query)}`);
    await next();
  };
};
