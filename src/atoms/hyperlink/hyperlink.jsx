import React from "react";
import NextLink from "next/link";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./hyperlink.module.scss";

const Hyperlink = ({ className, href, onClick, title }) => (
  <NextLink
    href={href}
    className={cn(className, styles.hyperlink)}
    onClick={onClick}
  >
    {title}
  </NextLink>
);

Hyperlink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export { Hyperlink };
