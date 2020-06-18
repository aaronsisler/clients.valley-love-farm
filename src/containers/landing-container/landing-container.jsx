import React from "react";
import Image from "../../atoms/image";
import { CDN_URL } from "../../config";
import AboutUs from "../../components/about-us";
import Benefits from "../../components/benefits";
import LandingGallery from "../../components/landing-gallery";
import Services from "../../components/services";

import "./landing-container.scss";

const splashImage = {
  altText: "Farmer on the field with tools",
  src: `${CDN_URL}/landing/landing-container__splash.jpg`
};

const LandingContainer = () => (
  <div className="landing-container">
    <Image className="landing-container__splash-image" {...splashImage} />
    <AboutUs />
    <Services />
    <Benefits />
    <LandingGallery />
  </div>
);

export default LandingContainer;
