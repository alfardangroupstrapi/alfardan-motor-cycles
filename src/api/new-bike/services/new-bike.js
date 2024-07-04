"use strict";

/**
 * new-bike service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::new-bike.new-bike");
