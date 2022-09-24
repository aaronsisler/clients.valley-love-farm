import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { CDN_URL } from "../../config";
import { Image } from "../../atoms/image";

import styles from "./background-image.module.scss";

const BackgroundImage = ({ altText, isBlurred, srcPath }) => {
  // useEffect is for mobile browsers whose address bar collapses away
  // When this happens, the image is known to "jump" to fill new viewport height
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("change", () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

  const className = isBlurred
    ? styles.backgroundImage__imageBlurred
    : styles.backgroundImage__image;

  return (
    <div className={styles.backgroundImage}>
      <Image
        className={className}
        src={`${CDN_URL}/${srcPath}`}
        alt={altText}
      />
    </div>
  );
};

BackgroundImage.propTypes = {
  altText: PropTypes.string.isRequired,
  srcPath: PropTypes.string.isRequired,
};

export { BackgroundImage };
