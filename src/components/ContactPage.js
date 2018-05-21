import React from 'react';
import { handlePageView } from '../tools/analytics';
import ContactForm from './ContactForm';


export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        handlePageView();
    }

    render() {
        return (
            <div id='contact_page'>
                <div className="contact_call">
                    <h3>Give us a call</h3>
                    <p>
                        (919) 886-9101
                    </p>
                </div>
                <div className="contact_map">
                    Google Map Goes Here
                </div>
                <div className='contact_form_container'>
                    <h3>Send us a message</h3>
                    <ContactForm />
                </div>
            </div>
        );
    }
}
