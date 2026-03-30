'use strict';

/**
 * `blog-category` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In blog-category middleware.');

    await next();
  };
};
