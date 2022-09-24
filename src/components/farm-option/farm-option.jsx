import React from "react";
import PropTypes from "prop-types";

import { Hyperlink } from "../../atoms/hyperlink";
import { Image } from "../../atoms/image";

import styles from "./farm-option.module.scss";

const FarmOption = ({ image, linkHref, text, title }) => (
  <div className={styles.farmOption}>
    <Image
      className={styles.farmOption__image}
      src={image.source}
      alt={image.altText}
    />
    <div className={styles.farmOption__content}>
      <div className={styles.farmOption__title}>{title}</div>
      <div className={styles.farmOption__text}>{text}</div>
      <Hyperlink
        href={`/${linkHref}`}
        className={styles.farmOption__navLink}
        title="Find Out More"
      />
    </div>
  </div>
);

FarmOption.propTypes = {
  image: PropTypes.shape({
    altText: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }),
  linkHref: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export { FarmOption };
