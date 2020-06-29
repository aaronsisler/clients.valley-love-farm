import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./external-link.scss";

const ExternalLink = ({ className, href, onClick, title }) => (
  <a
    className={cn("external-link", className)}
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
  title: PropTypes.string.isRequired
};

export default ExternalLink;
