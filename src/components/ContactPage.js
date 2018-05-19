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
                <header>
                    <h3>Contact Us</h3>
                    <p>
                        We promise that your email won&apos;t disappear into the nether.
                    </p>
                    <p>
                        We are more than happy to answer any questions you may have.
                    </p>
                </header>
                <div className='contact_form_container'>
                    <ContactForm />
                </div>
            </div>
        );
    }
}
