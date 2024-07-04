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
      model_family: {
        populate: true,
      },
    },
  },
  featuredPic: {
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
};

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In list-of-models-populate middleware.");
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
            brandFamily: {
              brands: {
                id: brandId,
              },
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
