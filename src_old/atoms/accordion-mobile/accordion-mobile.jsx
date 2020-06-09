import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import Hyperlink from "../hyperlink";

import "./accordion-mobile.scss";

class AccordionMobile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };
  }

  handleToggle = () =>
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));

  render() {
    const { isExpanded } = this.state;
    const hoverClassname = isExpanded ? "accordion-mobile--toggled" : undefined;

    return (
      <div className="accordion-mobile" onClick={this.handleToggle}>
        <h1 className={cn("accordion-mobile__title", hoverClassname)}>
          {this.props.title}
        </h1>
        <div className={cn("accordion-mobile__content", hoverClassname)}>
          {this.props.links.map((link, index) => (
            <Hyperlink
              className="accordion-mobile__content-link"
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
  title: PropTypes.string.isRequired
};

export default AccordionMobile;
