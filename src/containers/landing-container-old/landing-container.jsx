import React from "react";

import { Image } from "../../atoms/image";
import { AboutUs } from "../../components/about-us";
import { Benefits } from "../../components/benefits";
import { LandingGallery } from "../../components/landing-gallery";
import { Services } from "../../components/services";
import { landingContainerSplashImage } from "../../content/images/images";

import styles from "./landing-container.scss";

const LandingContainer = () => (
  <div className={styles.landingContainer}>
    <Image
      className={styles.landingContainer__splashImage}
      alt={landingContainerSplashImage.altText}
      src={landingContainerSplashImage.src}
    />
    <AboutUs />
    <Services />
    <Benefits />
    <LandingGallery />
  </div>
);

export { LandingContainer;
