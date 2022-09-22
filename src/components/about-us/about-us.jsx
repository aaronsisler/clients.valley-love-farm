import React from "react";
import { Image } from "../../atoms/image";
import { aboutImage } from "../../content/images";

import styles from "./about-us.scss";

const AboutUs = () => (
  <div className={styles.aboutUs}>
    <h2 className={styles.aboutUs__title}>About Us</h2>
    <div className={styles.aboutUs__content}>
      <div className={styles.aboutUs__image}>
        <Image src={aboutImage.src} alt={aboutImage.altText} />
      </div>
      <div className={styles.aboutUs__text}>
        <p>
          <strong>Valley Love Farm</strong> was started to bring high quality
          produce to local customers. We work hard to maintain sustainable and
          environmentally friendly practices by allowing our chickens to range
          free. This provides benefits to the environment and produces a
          healthier chicken, which in turn provides a healthier you!
        </p>
        <p>
          <strong>Community Supported Agriculture (CSA)</strong> is the perfect
          way for a customer, who cares about local food, to ally with a farmer
          and get the best they have to offer.
        </p>
      </div>
    </div>
  </div>
);

export { AboutUs };
