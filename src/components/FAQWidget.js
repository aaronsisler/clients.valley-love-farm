import React from 'react';
import { Collapse } from 'react-collapse';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleDown } from '@fortawesome/fontawesome-free-solid'
import PropTypes from 'prop-types';

export default class FAQWidget extends React.Component {
    constructor(props) {
        super(props);
        this.toggleWidget = this.toggleWidget.bind(this);
        this.state = {
            isWidgetOpen: false,
        }
    }

    toggleWidget() {
        this.setState((prevState) => ({
            isWidgetOpen: !prevState.isWidgetOpen
        }));
    }

    render() {
        return (
            <div className="faq_container">
                <div className="faq_question" onClick={this.toggleWidget}>
                    <div>
                        {this.props.question}
                    </div>
                    <div className="favicon_container">
                        {!this.state.isWidgetOpen && <FontAwesomeIcon icon={faAngleLeft} size='1x' className="favicon" onClick={this.openSideMenu} />}
                        {this.state.isWidgetOpen && <FontAwesomeIcon icon={faAngleDown} size='1x' className="favicon" onClick={this.closeSideMenu} />}
                    </div>
                </div>
                <Collapse className="faq_answer" isOpened={this.state.isWidgetOpen}>
                    <div>{this.props.answer}</div>
                </Collapse>
            </div>
        );
    }
}

FAQWidget.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};
