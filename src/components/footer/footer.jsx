import React from "react";

import { Hyperlink } from "../../atoms/hyperlink";

import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__copyright}>
      Copyright &copy; {new Date().getFullYear()}
    </div>
    <div>
      <Hyperlink
        href="/privacy-policy"
        title="Privacy Policy"
        className={styles.footer__link}
      />
    </div>
  </footer>
);

export { Footer };
