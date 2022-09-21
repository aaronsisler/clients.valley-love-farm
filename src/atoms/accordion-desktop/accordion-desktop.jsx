import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import Hyperlink from "../hyperlink";

import styles from "./accordion-desktop.module.scss";

const AccordionDesktop = ({ links, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => setIsExpanded(false);

  const handleToggle = (eventName) => {
    if (isExpanded && eventName === "leave") {
      setIsExpanded(false);
    } else if (!isExpanded && eventName === "enter") {
      setIsExpanded(true);
    }
  };

  const hoverClassname = isExpanded
    ? styles.accordionDesktopToggled
    : undefined;

  return (
    <div
      className={styles.accordionDesktop}
      onClick={handleClick}
      onMouseEnter={() => handleToggle("enter")}
      onMouseLeave={() => handleToggle("leave")}
    >
      <div className={cn(styles.accordionDesktop__title, hoverClassname)}>
        {title}
      </div>
      <div className={cn(styles.accordionDesktop__content, hoverClassname)}>
        {links.map((link, index) => (
          <Hyperlink
            className={styles.accordionDesktop__contentLink}
            key={index}
            {...link}
          />
        ))}
      </div>
    </div>
  );
};

AccordionDesktop.propTypes = {
  links: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export { AccordionDesktop };
