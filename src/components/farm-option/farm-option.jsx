import React from "react";
import PropTypes from "prop-types";
import Image from "../../atoms/image";
import Hyperlink from "../../atoms/hyperlink";

import styles from "./farm-option.scss";

const FarmOption = ({ image, linkHref, text, title }) => (
  <div className={styles.farm-option}>
    <Image
      className={styles.farm-option__image"
      src={image.source}
      altText={image.altText}
    />
    <div className={styles.farm-option__content}>
      <div className={styles.farm-option__title}>{title}</div>
      <div className={styles.farm-option__text}>{text}</div>
      <Hyperlink
        href={`/${linkHref}`}
        className={styles.farm-option__nav-link"
        title="Find Out More"
      />
    </div>
  </div>
);

FarmOption.propTypes = {
  image: PropTypes.shape({
    altText: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  }),
  linkHref: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default FarmOption;
