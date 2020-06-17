import React, { useState } from "react";
import cn from "classnames";
import Hamburger from "../../atoms/hamburger";
import Hyperlink from "../../atoms/hyperlink";

import "./navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuToggledClass = isMenuOpen ? "navbar__links--open" : undefined;

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Hyperlink
          className="navbar__brand-link navbar__link"
          href="/"
          title="Valley Love Farm"
        />
      </div>
      <div className="navbar__toggle">
        <Hamburger
          isToggled={isMenuOpen}
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
      </div>
      <div className={cn("navbar__links", menuToggledClass)}>
        <Hyperlink
          href="/"
          className="navbar__link"
          onClick={() => setMenuOpen(false)}
          title="Home"
        />

        <Hyperlink
          href="/farm"
          className="navbar__link"
          onClick={() => setMenuOpen(false)}
          title="Farm"
        />
        <Hyperlink
          href="/lawn"
          className="navbar__link"
          onClick={() => setMenuOpen(false)}
          title="Lawn"
        />
        <Hyperlink
          href="/contact"
          className="navbar__link"
          onClick={() => setMenuOpen(false)}
          title="Contact"
        />
      </div>
    </nav>
  );
};

export default Navbar;
