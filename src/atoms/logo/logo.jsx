import React from "react";
import Link from "next/link";
import cn from "classnames";
import PropTypes from "prop-types";

import { Image } from "../../atoms/image";

import styles from "./logo.module.scss";

const Logo = ({ className, image }) => (
  <div className={cn(styles.logo, className)}>
    <Link href="/">
      <a>
        <Image className={styles.logo__image} src={image.src} alt={image.alt} />
      </a>
    </Link>
  </div>
);

Logo.propTypes = {
  className: PropTypes.string,
  image: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }),
};

export { Logo };
