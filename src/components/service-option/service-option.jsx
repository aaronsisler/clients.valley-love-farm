import React from "react";
import Hyperlink from "../../atoms/hyperlink";
import Image from "../../atoms/image";
import PropTypes from "prop-types";

import styles from "./service-option.scss";

const ServiceOption = ({ image, linkPath, text, title }) => (
  <div className={styles.service-option}>
    <Image
      className={styles.service-option__image"
      src={image.src}
      altText={image.altText}
    />
    <div className={styles.service-option__content}>
      <div className={styles.service-option__content-title}>{title}</div>
      <div className={styles.service-option__content-text}>{text}</div>
      <Hyperlink
        href={`/${linkPath}`}
        className={styles.service-option__nav-link"
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
