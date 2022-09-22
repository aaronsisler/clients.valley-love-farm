import React from "react";

import { ExternalLink } from "../../atoms/external-link";
import { Image } from "../../atoms/image";
import { lawnGalleryImageContent } from "../../content/images";

import styles from "./lawn-container.module.scss";

const externalUrl = "https://commonsenselawncare.com/";

const LawnContainer = () => (
  <div className={styles.lawnContainer}>
    <h1 className={styles.lawnContainer__title}>We&apos;ve moved!</h1>
    <p className={styles.lawnContainer__text}>
      We grew thanks to all of our loyal clients. Please click the link below to
      find out about all of the lawn services we offer.
    </p>
    <ExternalLink
      href={externalUrl}
      className={styles.lawnContainer__navLink}
      title="Common Sense Lawn Care"
    />
    <div className={styles.lawnContainer__gallery}>
      {lawnGalleryImageContent.map((image) => (
        <Image
          key={image.key}
          className={styles.lawnContainer__image}
          src={image.src}
          alt={image.altText}
        />
      ))}
    </div>
  </div>
);

export { LawnContainer };
