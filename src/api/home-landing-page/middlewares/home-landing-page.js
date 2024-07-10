"use strict";

/**
 * `home-landing-page` middleware
 */
const populate = {
  HeroSlider: {
    populate: {
      slideItem: {
        populate: {
          slideImage: {
            populate: true,
          },
        },
      },
    },
  },
  brandGroupCarousel: {
    populate: {
      BrandsGroup: {
        populate: {
          brand: {
            populate: {
              logo: {
                fields: ["name", "alternativeText", "url"],
              },
            },
          },
        },
      },
    },
  },
  latestArrivals: {
    populate: {
      ListofModels: {
        populate: {
          brandFamily: {
            populate: {
              brands: {
                populate: {
                  logo: {
                    fields: ["name", "alternativeText", "url"],
                  },
                },
              },
              model_family: {
                populate: true,
              },
            },
          },
        },
      },
      button: {
        populate: true,
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In home-landing-page middleware.");
    ctx.query = { populate, ...ctx.query };

    await next();
  };
};
