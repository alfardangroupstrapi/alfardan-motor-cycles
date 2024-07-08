'use strict';

/**
 * `model-families` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In model-families middleware.');

    await next();
  };
};
