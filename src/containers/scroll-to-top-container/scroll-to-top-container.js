import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class ScrollToTopContainer extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTopContainer.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default withRouter(ScrollToTopContainer);
