import type { Schema, Attribute } from '@strapi/strapi';

export interface BrandSinglePageFooter extends Schema.Component {
  collectionName: 'components_brand_single_page_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    socialMediaLinks: Attribute.Component<'navigation.social-media', true>;
    copyRightsText: Attribute.Text;
    menuLinks: Attribute.Component<'navigation.menu-link', true>;
  };
}

export interface BrandSinglePageHeaderHero extends Schema.Component {
  collectionName: 'components_brand_single_page_header_heroes';
  info: {
    displayName: 'HeroBanner';
    description: '';
  };
  attributes: {
    heroImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    captionSubTitle: Attribute.String;
    captionMainTitle: Attribute.String;
    buttonLink: Attribute.Component<'buttons.button-link'>;
    heroVideo: Attribute.Media<'videos'>;
  };
}

export interface BrandSinglePageHeader extends Schema.Component {
  collectionName: 'components_brand_single_page_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    logoPosition: Attribute.Enumeration<['left', 'centre', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
    navbar: Attribute.Component<'navigation.menu-link', true> &
      Attribute.Required;
    topLinks: Attribute.Component<'brand-single-page.top-links'>;
  };
}

export interface BrandSinglePageListOfAvailableModels extends Schema.Component {
  collectionName: 'components_brand_single_page_list_of_available_models';
  info: {
    displayName: 'List of Available Models';
  };
  attributes: {
    blockTitle: Attribute.String;
  };
}

export interface BrandSinglePageTopLinks extends Schema.Component {
  collectionName: 'components_brand_single_page_top_links';
  info: {
    displayName: 'topLinks';
    description: '';
  };
  attributes: {
    brandSloganText: Attribute.String;
    brandSloganImage: Attribute.Media<'images'>;
    contactUsLabel: Attribute.String;
    contactUsURL: Attribute.String;
  };
}

export interface ButtonsButtonLink extends Schema.Component {
  collectionName: 'components_buttons_button_links';
  info: {
    displayName: 'buttonLink';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    URL: Attribute.String;
    Target: Attribute.Enumeration<['_blank', '_self']> &
      Attribute.DefaultTo<'_self'>;
    buttonStyle: Attribute.Enumeration<
      ['primary', 'secondary', 'primary-outline', 'secondary-outline']
    > &
      Attribute.DefaultTo<'primary'>;
    enableButton: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ComponentFeaturedImage extends Schema.Component {
  collectionName: 'components_component_featured_images';
  info: {
    displayName: 'Featured Image';
    icon: 'landscape';
  };
  attributes: {
    featuredImage: Attribute.Media<'images'>;
  };
}

export interface ComponentGallery extends Schema.Component {
  collectionName: 'components_component_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'landscape';
  };
  attributes: {
    gallery: Attribute.Media<'images', true>;
  };
}

export interface ComponentHeroSlider extends Schema.Component {
  collectionName: 'components_component_hero_sliders';
  info: {
    displayName: 'Hero Slider';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    slideItem: Attribute.Component<'repeater-components.slider-item', true>;
  };
}

export interface ComponentPageTitle extends Schema.Component {
  collectionName: 'components_component_page_titles';
  info: {
    displayName: 'Title';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    price: Attribute.Integer;
    brand: Attribute.Relation<
      'component.page-title',
      'oneToOne',
      'api::brand.brand'
    >;
    featuredImage: Attribute.Component<'component.featured-image'>;
    gallery: Attribute.Component<'component.gallery'>;
    additionalInfo: Attribute.Text;
  };
}

export interface ElementsLandingSection extends Schema.Component {
  collectionName: 'components_elements_landing_sections';
  info: {
    displayName: 'Landing Section';
    icon: 'dashboard';
  };
  attributes: {
    sectionTitle: Attribute.String;
    sectionButton: Attribute.Component<'buttons.button-link'>;
  };
}

export interface HomeLandingPageLatestArrivals extends Schema.Component {
  collectionName: 'components_home_landing_page_latest_arrivals';
  info: {
    displayName: 'Latest Arrivals';
  };
  attributes: {
    sectionTitle: Attribute.String;
    ListofModels: Attribute.Relation<
      'home-landing-page.latest-arrivals',
      'oneToMany',
      'api::list-of-model.list-of-model'
    >;
    button: Attribute.Component<'buttons.button-link'>;
  };
}

export interface ModelsCategories extends Schema.Component {
  collectionName: 'components_models_categories';
  info: {
    displayName: 'Family Names';
    icon: 'oneToMany';
    description: '';
  };
  attributes: {
    brands: Attribute.Relation<
      'models.categories',
      'oneToMany',
      'api::brand.brand'
    >;
    model_family: Attribute.Relation<
      'models.categories',
      'oneToOne',
      'api::model-family.model-family'
    >;
  };
}

export interface ModelsDescriptionTabs extends Schema.Component {
  collectionName: 'components_models_description_tabs';
  info: {
    displayName: 'Description Tabs';
  };
  attributes: {
    overview: Attribute.RichText;
    techSpecs: Attribute.RichText;
    individualisation: Attribute.RichText;
  };
}

export interface NavigationMenuLink extends Schema.Component {
  collectionName: 'components_navigation_menu_links';
  info: {
    displayName: 'Menu Link';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    path: Attribute.String;
    isEnquiryFormModal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface NavigationSocialMedia extends Schema.Component {
  collectionName: 'components_navigation_social_medias';
  info: {
    displayName: 'Social Media';
    icon: 'paperPlane';
  };
  attributes: {
    icon: Attribute.Enumeration<['Facebook', 'Instagram', 'X', 'YouTube']>;
    url: Attribute.String;
  };
}

export interface RepeaterComponentsBrand extends Schema.Component {
  collectionName: 'components_repeater_components_brands';
  info: {
    displayName: 'Brand';
  };
  attributes: {
    brand: Attribute.Relation<
      'repeater-components.brand',
      'oneToOne',
      'api::brand.brand'
    >;
  };
}

export interface RepeaterComponentsBrandsGroupCarousel
  extends Schema.Component {
  collectionName: 'components_component_brands_group_carousels';
  info: {
    displayName: 'Brands Group Item';
    description: '';
  };
  attributes: {
    BrandsGroup: Attribute.Component<'repeater-components.brand', true>;
  };
}

export interface RepeaterComponentsSliderItem extends Schema.Component {
  collectionName: 'components_component_slider_items';
  info: {
    displayName: 'Slider Item';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    slideImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'brand-single-page.footer': BrandSinglePageFooter;
      'brand-single-page.header-hero': BrandSinglePageHeaderHero;
      'brand-single-page.header': BrandSinglePageHeader;
      'brand-single-page.list-of-available-models': BrandSinglePageListOfAvailableModels;
      'brand-single-page.top-links': BrandSinglePageTopLinks;
      'buttons.button-link': ButtonsButtonLink;
      'component.featured-image': ComponentFeaturedImage;
      'component.gallery': ComponentGallery;
      'component.hero-slider': ComponentHeroSlider;
      'component.page-title': ComponentPageTitle;
      'elements.landing-section': ElementsLandingSection;
      'home-landing-page.latest-arrivals': HomeLandingPageLatestArrivals;
      'models.categories': ModelsCategories;
      'models.description-tabs': ModelsDescriptionTabs;
      'navigation.menu-link': NavigationMenuLink;
      'navigation.social-media': NavigationSocialMedia;
      'repeater-components.brand': RepeaterComponentsBrand;
      'repeater-components.brands-group-carousel': RepeaterComponentsBrandsGroupCarousel;
      'repeater-components.slider-item': RepeaterComponentsSliderItem;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
