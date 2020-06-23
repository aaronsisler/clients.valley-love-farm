import React from "react";
import Hyperlink from "../../atoms/hyperlink";

import "./footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      Copyright &copy; {new Date().getFullYear()}
    </div>
    <div>
      <Hyperlink
        href="/privacy-policy"
        title="Privacy Policy"
        className="footer__link"
      />
    </div>
  </footer>
);

export default Footer;
