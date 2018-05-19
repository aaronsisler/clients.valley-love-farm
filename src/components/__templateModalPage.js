import React from 'react';
import { handlePageView, handleEvent } from '../tools/analytics';
import { openModalEvent, closeModalEvent, navigateByButtonEvent } from '../tools/analytics_events';
import __templateModal from './__templateModal';

export default class PricingPage extends React.Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleAnalyticsEvent = this.handleAnalyticsEvent.bind(this);
        this.state = {
            isModalOpen: false
        }
    }

    handleAnalyticsEvent() {
        handleEvent(navigateByButtonEvent)
    }

    componentDidMount() {
        handlePageView();
    }

    toggleModal() {
        if (this.state.isModalOpen) {
            handleEvent(closeModalEvent);
        }
        else {
            handleEvent(openModalEvent);
        }

        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen
        }));
    }

    render() {
        return (
            <section>
                <h3>Template Modal</h3>
                <button className="button" onClick={this.toggleModal}>
                    Toggle Template Modal
                            </button>
                <__templateModal
                    isModalOpen={this.state.isModalOpen}
                    closeModal={this.toggleModal}
                />
            </section>
        );
    }
}
