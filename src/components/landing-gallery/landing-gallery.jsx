import React from "react";

import { Image } from "../../atoms/image";
import { landingGalleryImageContent } from "../../content/images";

import styles from "./landing-gallery.module.scss";

const LandingGallery = () => (
  <div className={styles.landingGallery}>
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
