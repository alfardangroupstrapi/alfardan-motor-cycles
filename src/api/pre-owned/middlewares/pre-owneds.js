"use strict";

/**
 * `pre-owneds` middleware
 */


const populate = {
  brand: {
    populate: {
      logo: {
        populate: true,
      },
    },
  },
  gallery: {
    populate: true,
  },
  featuredImage: {
    populate: true,
  },
};

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In pre-owneds-populate middleware.");
    const { query } = ctx;
    strapi.log.info(`Query before modification: ${JSON.stringify(query)}`);

    const filters = [];

    if (query["brand-id"]) {
      const brandId = query["brand-id"];
      delete query["brand-id"];
      filters.push({ brand: { id: brandId } });
    }
    if (query["brand-slug"]) {
      const brandSlug = query["brand-slug"];
      delete query["brand-slug"];
      filters.push({ brand: { id: brandSlug } });
    }

    /*if (query["cat-id"]) {
      const catId = query["cat-id"];
      delete query["cat-id"];
      filters.push({ category: { id: catId } });
    }

    if (query["subcat-id"]) {
      const subcatId = query["subcat-id"];
      delete query["subcat-id"];
      filters.push({ subCategory: { id: subcatId } });
    }*/

    if (filters.length > 0) {
      query.filters = {
        $and: [query.filters || {}, ...filters],
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
