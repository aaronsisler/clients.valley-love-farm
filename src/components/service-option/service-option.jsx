import React from "react";
import PropTypes from "prop-types";

import { Hyperlink } from "../../atoms/hyperlink";
import { Image } from "../../atoms/image";

import styles from "./service-option.scss";

const ServiceOption = ({ image, linkPath, text, title }) => (
  <div className={styles.service - option}>
    <Image
      className={styles.serviceOption__image}
      src={image.src}
      alt={image.altText}
    />
    <div className={styles.serviceOption__content}>
      <div className={styles.serviceOption__contentTitle}>{title}</div>
      <div className={styles.serviceOption__contentText}>{text}</div>
      <Hyperlink
        href={`/${linkPath}`}
        className={styles.serviceOption__navLink}
        title="Find Out More"
      />
    </div>
  </div>
);

ServiceOption.propTypes = {
  image: PropTypes.shape({
    altText: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }),
  linkPath: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export { ServiceOption };
