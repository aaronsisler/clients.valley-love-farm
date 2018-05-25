import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class ScrollToTop extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return this.props.children
    }
}

ScrollToTop.propTypes = {
    location: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
};

export default withRouter(ScrollToTop)
