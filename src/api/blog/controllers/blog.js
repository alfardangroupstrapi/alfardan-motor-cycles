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
        mediaWithCaptions: {
          populate: {
            imageFiles: {
              populate: true,
            },
            videoFile: {
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
