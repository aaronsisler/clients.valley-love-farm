import { CDN_URL } from "../../config";
import { getCdnUrl } from "../../utils";

const CDN_URL__FARM = getCdnUrl("/farm");
const CDN_URL__LANDING = getCdnUrl("/landing");

// General Images
const logo = {
  altText: "Valley Love Farm",
  src: `${CDN_URL}/logo.png`,
};

// Landing Container Images
const aboutImage = {
  altText: "Farmer feeding chicken",
  src: `${CDN_URL__LANDING}/landing-container__about.jpg`,
};

const landingContainerSplashImage = {
  altText: "Farmer on the field with tools",
  src: `${CDN_URL__LANDING}/landing-container__splash-2.jpg`,
};

// Farm Options
const farmOptionPorkImage = {
  source: `${CDN_URL__FARM}/farm-container__pork.jpg`,
  altText: "Pork",
};

const farmOptionPoultryImage = {
  source: `${CDN_URL__FARM}/farm-container__poultry.jpg`,
  altText: "Poultry",
};

// Service Options
const serviceOptionFarmImage = {
  src: `${CDN_URL}/landing-container__service-farm.jpg`,
  altText: "Farm service",
};

const serviceOptionLawnImage = {
  src: `${CDN_URL}/landing-container__service-lawn.jpg`,
  altText: "Lawn service",
};

// Landing Benefits
const benefitsWidgetImage1 = {
  altText: "Widget 1",
  src: `${CDN_URL__LANDING}/landing-container__benefit-1.png`,
};

const benefitsWidgetImage2 = {
  altText: "Widget 2",
  src: `${CDN_URL__LANDING}/landing-container__benefit-2.png`,
};

const benefitsWidgetImage3 = {
  altText: "Widget 3",
  src: `${CDN_URL__LANDING}/landing-container__benefit-3.png`,
};

const benefitsWidgetImage4 = {
  altText: "Widget 4",
  src: `${CDN_URL__LANDING}/landing-container__benefit-4.png`,
};

export {
  aboutImage,
  benefitsWidgetImage1,
  benefitsWidgetImage2,
  benefitsWidgetImage3,
  benefitsWidgetImage4,
  farmOptionPorkImage,
  farmOptionPoultryImage,
  landingContainerSplashImage,
  logo,
  serviceOptionFarmImage,
  serviceOptionLawnImage,
};
