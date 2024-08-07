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

    const brandId = query["brand-id"];
    const familyId = query["family-id"];

    // Remove the brand-id and family-id from the query parameters
    delete query["brand-id"];
    delete query["family-id"];

    // Apply filters to only include models with the specified brand ID and family ID
    const filters = [
      query.filters || {},
      ...(brandId ? [{ brandFamily: { brands: { id: brandId } } }] : []),
      ...(familyId ? [{ brandFamily: { model_family: { id: familyId } } }] : []),
    ];

    if (filters.length > 1) {
      query.filters = { $and: filters };
    } else if (filters.length === 1) {
      query.filters = filters[0];
    }

    ctx.query = { populate, ...ctx.query };
    strapi.log.info(`Query after modification: ${JSON.stringify(ctx.query)}`);
    await next();
  };
};
