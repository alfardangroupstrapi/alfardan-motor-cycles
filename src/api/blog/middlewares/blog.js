"use strict";

/**
 * `blog` middleware
 */

const populate = {
  coverImage: {
    populate: true,
  },
  pageBanner: {
    populate: {
      headerImage: {
        populate: true,
      },
      headerVideo: {
        populate: true,
      },
    },
  },
  imageGallery: {
    populate: {
      galleryImage: {
        populate: true,
      },
    },
  },
  blog_category: {
    populate: true,
  },
};

module.exports = () => {
  return async (ctx, next) => {
    strapi.log.info("In blog middleware");

    ctx.query = {
      ...ctx.query,
      populate,
    };

    await next();
  };
};
