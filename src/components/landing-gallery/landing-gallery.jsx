import React from "react";

import { Image } from "../../atoms/image";
import { landingGalleryImageContent } from "../../content/images";

import styles from "./landing-gallery.scss";

const LandingGallery = () => (
  <div className={styles.landing - gallery}>
    {landingGalleryImageContent.map((image) => (
      <Image
        key={image.key}
        className={styles.landingGallery__image}
        src={image.src}
        alt={image.altText}
      />
    ))}
  </div>
);

export { LandingGallery };
