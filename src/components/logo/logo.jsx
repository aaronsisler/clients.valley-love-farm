import React from "react";
import NextLink from "next/link";
import { CDN_URL } from "../../config";

import "./logo.scss";

const logo = {
  altText: "Valley Love Farm",
  src: `${CDN_URL}/logo.png`
};

const Logo = () => (
  <div className="logo">
    <NextLink href="/">
      <img className="logo__image" src={logo.src} alt={logo.alt} />
    </NextLink>
  </div>
);

export default Logo;
