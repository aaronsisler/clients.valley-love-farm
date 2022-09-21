import React from "react";
import NextLink from "next/link";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./hyperlink.module.scss";

const Hyperlink = ({ className, href, onClick, title }) => (
  <NextLink href={href}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className={cn(styles.hyperlink, className)} onClick={onClick}>
      {title}
    </a>
  </NextLink>
);

Hyperlink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export { Hyperlink };
