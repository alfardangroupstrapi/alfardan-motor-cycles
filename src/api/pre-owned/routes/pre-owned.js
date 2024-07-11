'use strict';

/**
 * pre-owned router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pre-owned.pre-owned', {
  config: {
    find: {
      middlewares: ["api::pre-owned.pre-owneds"],
    },
    findOne: {
      middlewares: ["api::pre-owned.pre-owneds"],
    },
  },
});
