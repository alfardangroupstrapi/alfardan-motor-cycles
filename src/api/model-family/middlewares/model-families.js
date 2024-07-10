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
  return async (ctx, next) => {
    strapi.log.info("In model-families-populate middleware.");
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
            brands: {
              id: brandId,
            },
          },
        ],
      };
    }

    // Add the populate object to the query
    if (!query.populate) {
      query.populate = populate;
    } else {
      query.populate = { ...query.populate, ...populate };
    }

    ctx.query = query;
    strapi.log.info(`Query after modification: ${JSON.stringify(ctx.query)}`);
    await next();
  };
};
