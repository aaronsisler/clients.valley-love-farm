import React from 'react';
import { Link } from 'react-router-dom';
import { handlePageView, handleEvent } from '../tools/analytics';
import { navigateByButtonEvent } from '../tools/analytics_events';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleAnalyticsEvent = this.handleAnalyticsEvent.bind(this);
    }

    handleAnalyticsEvent() {
        handleEvent(navigateByButtonEvent)
    }

    componentDidMount() {
        handlePageView();
    }

    render() {
        return (
            <div id="landing_page">
                <header>
                    <div className="intro_text">Boilerplate Template</div>
                    <div>
                        <Link to='/contact' onClick={this.handleAnalyticsEvent} className='link'>Go to Contact Page</Link>
                    </div>
                </header>
            </div>
        );
    }
}
