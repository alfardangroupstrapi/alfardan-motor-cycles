'use strict';

/**
 * `home-landing-page` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In home-landing-page middleware.');

    await next();
  };
};
