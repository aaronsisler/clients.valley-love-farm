import React, { useState } from "react";
import cn from "classnames";

import { Hamburger } from "../../atoms/hamburger";
import { Hyperlink } from "../../atoms/hyperlink";
import { Logo } from "../../atoms/logo";

import { logo } from "../../content/images";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuToggledClass = isMenuOpen ? styles.navbar__linksOpen : undefined;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Logo image={logo} />
      </div>
      <div className={styles.navbar__toggle}>
        <Hamburger
          isToggled={isMenuOpen}
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
      </div>
      <div className={cn(styles.navbar__links, menuToggledClass)}>
        <Hyperlink
          href="/"
          className={styles.navbar__link}
          onClick={() => setMenuOpen(false)}
          title="Home"
        />

        <Hyperlink
          href="/farm"
          className={styles.navbar__link}
          onClick={() => setMenuOpen(false)}
          title="Farm"
        />
        <Hyperlink
          href="/lawn"
          className={styles.navbar__link}
          onClick={() => setMenuOpen(false)}
          title="Lawn"
        />
        <Hyperlink
          href="/contact"
          className={styles.navbar__link}
          onClick={() => setMenuOpen(false)}
          title="Contact"
        />
      </div>
    </nav>
  );
};

export { Navbar };
