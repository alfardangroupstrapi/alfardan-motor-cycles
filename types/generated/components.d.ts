import type { Schema, Attribute } from '@strapi/strapi';

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

export interface NavigationMenuLink extends Schema.Component {
  collectionName: 'components_navigation_menu_links';
  info: {
    displayName: 'Menu Link';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    path: Attribute.String;
    target: Attribute.Enumeration<['sametab', 'newtab', 'model']> &
      Attribute.DefaultTo<'sametab'>;
    isEnquiryFormModal: Attribute.Boolean & Attribute.DefaultTo<false>;
    modalTargetID: Attribute.String;
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

export interface ComponentSliderItem extends Schema.Component {
  collectionName: 'components_component_slider_items';
  info: {
    displayName: 'Slider Item';
    description: '';
  };
  attributes: {
    sliderImage: Attribute.Media<'images'>;
    slideCaptionTitle: Attribute.String;
    slideCaptionSubTitle: Attribute.String;
    actions: Attribute.Component<'buttons.button-link'>;
  };
}

export interface ComponentLatestModel extends Schema.Component {
  collectionName: 'components_component_latest_models';
  info: {
    displayName: 'Latest Model';
  };
  attributes: {
    latestModel: Attribute.Relation<
      'component.latest-model',
      'oneToMany',
      'api::list-of-model.list-of-model'
    >;
  };
}

export interface ComponentCtaBanner extends Schema.Component {
  collectionName: 'components_component_cta_banners';
  info: {
    displayName: 'CTA Banner';
  };
  attributes: {
    bannerImage: Attribute.Media<'images'> & Attribute.Required;
    bannerVideo: Attribute.Media<'videos'>;
    captionSubTitle: Attribute.String;
    captionMainTitle: Attribute.String;
    actions: Attribute.Component<'buttons.button-link'>;
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
    Target: Attribute.Enumeration<['sametab', 'newtab', 'modal']> &
      Attribute.DefaultTo<'sametab'>;
    buttonStyle: Attribute.Enumeration<['theme', 'primary', 'secondary']> &
      Attribute.DefaultTo<'theme'>;
    enableButton: Attribute.Boolean & Attribute.DefaultTo<true>;
    modalTargetID: Attribute.String;
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

export interface BrandSinglePageListOfAvailableModels extends Schema.Component {
  collectionName: 'components_brand_single_page_list_of_available_models';
  info: {
    displayName: 'List of Available Models';
  };
  attributes: {
    blockTitle: Attribute.String;
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

export interface BrandSinglePageHeaderHero extends Schema.Component {
  collectionName: 'components_brand_single_page_header_heroes';
  info: {
    displayName: 'HeroBanner';
    description: '';
  };
  attributes: {
    heroImage: Attribute.Media<'images', true> & Attribute.Required;
    captionSubTitle: Attribute.String;
    captionMainTitle: Attribute.String;
    buttonLink: Attribute.Component<'buttons.button-link'>;
    heroVideo: Attribute.Media<'videos'>;
  };
}

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

export interface BrandSinglePageBrandChildPages extends Schema.Component {
  collectionName: 'components_brand_single_page_brand_child_pages';
  info: {
    displayName: 'Brand Child Page';
    description: '';
  };
  attributes: {
    pageTitle: Attribute.String & Attribute.Required;
    heroBanner: Attribute.Media<'images'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'navigation.social-media': NavigationSocialMedia;
      'navigation.menu-link': NavigationMenuLink;
      'models.description-tabs': ModelsDescriptionTabs;
      'models.categories': ModelsCategories;
      'component.slider-item': ComponentSliderItem;
      'component.latest-model': ComponentLatestModel;
      'component.cta-banner': ComponentCtaBanner;
      'buttons.button-link': ButtonsButtonLink;
      'brand-single-page.top-links': BrandSinglePageTopLinks;
      'brand-single-page.list-of-available-models': BrandSinglePageListOfAvailableModels;
      'brand-single-page.header': BrandSinglePageHeader;
      'brand-single-page.header-hero': BrandSinglePageHeaderHero;
      'brand-single-page.footer': BrandSinglePageFooter;
      'brand-single-page.brand-child-pages': BrandSinglePageBrandChildPages;
    }
  }
}
