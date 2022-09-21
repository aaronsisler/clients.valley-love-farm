import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import Hyperlink from "../hyperlink";

import styles from "./accordion-mobile.module.scss";

class AccordionMobile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };
  }

  handleToggle = () =>
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));

  render() {
    const { isExpanded } = this.state;
    const hoverClassname = isExpanded
      ? styles.accordionMobileToggled
      : undefined;

    return (
      <div className={styles.accordionMobile} onClick={this.handleToggle}>
        <div className={cn(styles.accordionMobile__title, hoverClassname)}>
          {this.props.title}
        </div>
        <div className={cn(styles.accordionMobile__content, hoverClassname)}>
          {this.props.links.map((link, index) => (
            <Hyperlink
              className={styles.accordionMobile__contentLink}
              key={index}
              onClick={this.props.onContentClick}
              {...link}
            />
          ))}
        </div>
      </div>
    );
  }
}

AccordionMobile.propTypes = {
  links: PropTypes.array.isRequired,
  onContentClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export { AccordionMobile };
