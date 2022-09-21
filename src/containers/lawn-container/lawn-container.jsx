import React from "react";
import ExternalLink from "../../atoms/external-link";
import Image from "../../atoms/image";
import lawnGallery from "../../content/lawn-gallery";

import styles from "./lawn-container.scss";

const externalUrl = "https://commonsenselawncare.com/";

const LawnContainer = () => (
  <div className={styles.lawn-container}>
    <h1 className={styles.lawn-container__title}>We've moved!</h1>
    <p className={styles.lawn-container__text}>
      We grew thanks to all of our loyal clients. Please click the link below to
      find out about all of the lawn services we offer.
    </p>
    <ExternalLink
      href={externalUrl}
      className={styles.lawn-container__nav-link"
      title="Common Sense Lawn Care"
    />
    <div className={styles.lawn-container__gallery}>
      {lawnGallery.map(image => (
        <Image key={image.key} className={styles.lawn-container__image" {...image} />
      ))}
    </div>
  </div>
);

export default LawnContainer;
