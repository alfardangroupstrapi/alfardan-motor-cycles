"use strict";

/**
 * blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
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
      },
    };

    return await super.find(ctx);
  },
}));
