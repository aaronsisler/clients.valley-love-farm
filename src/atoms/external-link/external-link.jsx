import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./external-link.module.scss";

const ExternalLink = ({ className, href, onClick, title }) => (
  <a
    className={cn(styles.externalLink, className)}
    onClick={onClick}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {title}
  </a>
);

ExternalLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export { ExternalLink };
