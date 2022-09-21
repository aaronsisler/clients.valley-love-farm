import React from "react";

import { Image } from "../../atoms/image";
import { landingGallery } from "../../content/landing-gallery";

import styles from "./landing-gallery.scss";

const LandingGallery = () => (
  <div className={styles.landing-gallery}>
    {landingGallery.map((image) => (
      <Image key={image.key} className={styles.landing-gallery__image" {...image} />
    ))}
  </div>
);

export default LandingGallery;
