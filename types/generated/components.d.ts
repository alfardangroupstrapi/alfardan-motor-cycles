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
    heroImage: Attribute.Media<'images', true> & Attribute.Required;
    captionSubTitle: Attribute.String;
    captionMainTitle: Attribute.String;
    buttonLink: Attribute.Component<'buttons.button-link'>;
    heroVideo: Attribute.Media<'videos'>;
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
    buttonStyle: Attribute.Enumeration<['theme', 'primary', 'secondary']> &
      Attribute.DefaultTo<'theme'>;
    enableButton: Attribute.Boolean & Attribute.DefaultTo<true>;
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
  };
  attributes: {
    Label: Attribute.String;
    Path: Attribute.String;
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
      'brand-single-page.list-of-available-models': BrandSinglePageListOfAvailableModels;
      'buttons.button-link': ButtonsButtonLink;
      'models.categories': ModelsCategories;
      'models.description-tabs': ModelsDescriptionTabs;
      'navigation.menu-link': NavigationMenuLink;
      'navigation.social-media': NavigationSocialMedia;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
