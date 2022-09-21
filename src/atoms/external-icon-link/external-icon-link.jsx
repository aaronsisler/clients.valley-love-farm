import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./external-icon-link.module.scss";

const ExternalIconLink = ({ children, className, href, onClick }) => (
  <a
    className={cn(styles.externalLink, className)}
    onClick={onClick}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

ExternalIconLink.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export { ExternalIconLink };
