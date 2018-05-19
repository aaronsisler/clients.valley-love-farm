import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/fontawesome-free-solid'
import { sendEmail, isEmailValid } from '../tools/email';
import { handleEvent } from '../tools/analytics';
import { analyticsCategories, analyticsActions, analyticsLabels } from '../tools/constants';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleAddInput = this.handleAddInput.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);

        this.handleContactInfo = this.handleContactInfo.bind(this);
        this.handleError = this.handleError.bind(this);

        this.handleEmailValidation = this.handleEmailValidation.bind(this);
        this.handlePhoneValidation = this.handlePhoneValidation.bind(this);
        this.handleRequiredValidation = this.handleRequiredValidation.bind(this);

        this.handleSubmitContactForm = this.handleSubmitContactForm.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.state = {
            buttonText: "Send It",
            emailSent: false,
            emailError: false,
            phoneNumber: "",
            contactInfo: {},
            error: {}
        }
    }

    handleSubmitContactForm(e) {
        e.preventDefault();
        document.getElementById('contactFormButton').setAttribute("disabled", true);
        this.setState(() => ({
            buttonText: "Sending"
        }));

        const contactInputs = this.state.contactInfo;
        const data = {
            name: contactInputs.name,
            emailAddress: contactInputs.email,
            phoneNumber: contactInputs.phone,
            message: contactInputs.message
        }
        const analyticsEvent = {
            category: analyticsCategories.contact,
            action: analyticsActions.sendEmail,
            label: analyticsLabels.contactForm
        }
        const done = () => {
            handleEvent(analyticsEvent);
            this.handleResetForm();
            return this.setState(() => ({
                emailSent: true
            }));
        };
        const fail = () => this.setState(() => ({
            emailError: true
        }))
        sendEmail(data, done, fail);
    }

    handleInput(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value.trim();

        switch (inputName) {
            case 'email':
                this.handleEmailValidation(inputValue);
                return;
            case 'phone':
                this.handlePhoneValidation(inputValue);
                return;
            case 'name':
                this.handleRequiredValidation(inputName, inputValue);
                return;
            default:
                this.handleAddInput(inputName, inputValue);
                return;
        }
    }

    handleContactInfo(inputName, inputValue = undefined) {
        //Remove from Contact Info
        if (!inputValue) {
            const { [inputName]: undefined, ...contactInfo } = this.state.contactInfo; // eslint-disable-line no-unused-vars
            return this.setState(() => ({
                contactInfo
            }));
        }
        //Add to Contact Info
        return this.setState(() => ({
            contactInfo: { ...this.state.contactInfo, [inputName]: inputValue }
        }));
    }

    handleError(inputName, inputValue = undefined) {
        //Remove from Error
        if (!inputValue) {
            const { [inputName]: undefined, ...error } = this.state.error; // eslint-disable-line no-unused-vars
            return this.setState(() => ({
                error
            }));
        }
        //Add to Error
        return this.setState(() => ({
            error: { ...this.state.error, [inputName]: inputValue }
        }));
    }

    handleEmailValidation(inputValue) {
        if (!isEmailValid(inputValue)) {
            this.handleError('email', 'Please enter a valid email address');
            this.handleContactInfo('email');
            return;
        }
        this.handleError('email');
        this.handleContactInfo('email', inputValue);
    }

    handlePhoneValidation(inputValue) {
        if (inputValue && inputValue.length != 10) {
            this.handleError('phone', 'Phone number must be 10 digits');
            this.handleContactInfo('phone');
            return;
        }
        this.handleError('phone');
        this.handleContactInfo('phone', inputValue);
    }

    handleRequiredValidation(inputName, inputValue) {
        if (!inputValue) {
            this.handleError(inputName, 'This is a required field');
            this.handleContactInfo(inputName);
            return;
        }
        this.handleError(inputName);
        this.handleContactInfo(inputName, inputValue);
    }

    handleAddInput(inputName, inputValue) {
        if (!inputValue) {
            this.handleContactInfo(inputName);
            return;
        }
        this.handleContactInfo(inputName, inputValue);
    }

    handlePhoneChange(e) {
        const phoneNumber = e.target.value;

        if (!phoneNumber || (phoneNumber.match(/^[0-9]*$/) && phoneNumber.length <= 10)) {
            return this.setState(() => ({ phoneNumber }));
        }
    }

    handleResetForm() {
        const contactInputs = document.forms[0].getElementsByClassName('contact_form_input');
        for (const input of contactInputs) {
            input.value = '';
        }
        return this.setState(() => ({ contactInfo: {}, error: {} }));
    }

    render() {
        return (
            <div id="contact_form">
                {
                    (!this.state.emailSent && !this.state.emailError)
                    &&
                    <form className="contact_form" onSubmit={this.handleSubmitContactForm}>
                        {
                            this.state.error.name
                            &&
                            <p className="contact_form_error">
                                <FontAwesomeIcon icon={faExclamationCircle} size='lg' color='red' />
                                {this.state.error.name}
                            </p>
                        }
                        <input
                            id="contact_name"
                            type="text"
                            name="name"
                            className='contact_form_input'
                            placeholder="Name (Required)"
                            onBlur={this.handleInput}
                        />
                        {
                            this.state.error.email
                            &&
                            <p className="contact_form_error">
                                <FontAwesomeIcon icon={faExclamationCircle} size='lg' color='red' />
                                {this.state.error.email}
                            </p>
                        }
                        <input
                            id="contact_email"
                            type="text"
                            name="email"
                            className='contact_form_input'
                            placeholder="Email (Required)"
                            onBlur={this.handleInput}
                        />
                        {
                            this.state.error.phone
                            &&
                            <p className="contact_form_error">
                                <FontAwesomeIcon icon={faExclamationCircle} size='lg' color='red' />
                                {this.state.error.phone}
                            </p>
                        }
                        <input
                            type="text"
                            name="phone"
                            value={this.state.phoneNumber}
                            className='contact_form_input'
                            placeholder="Phone (Digits only, no dashes, etc.)"
                            onChange={this.handlePhoneChange}
                            onBlur={this.handleInput}
                        />
                        <textarea
                            name="message"
                            rows="4"
                            className='contact_form_input'
                            placeholder="What's on your mind?"
                            onBlur={this.handleInput}
                        ></textarea>
                        <div>
                            <button
                                id="contactFormButton"
                                className="contact_form_button"
                                disabled={Object.keys(this.state.error).length > 0
                                    || !this.state.contactInfo.name
                                    || !this.state.contactInfo.email}
                            >
                                {this.state.buttonText}
                            </button>
                        </div>
                    </form>
                }
                {
                    this.state.emailSent &&
                    <div className="contact_form_email">
                        <p>Thank you for reaching out! We are excited to get back in touch with you.</p>
                    </div>
                }
                {
                    this.state.emailError &&
                    <div className="contact_form_email">
                        <p>Something went wrong unfortunately. Please try reloading the page.</p>
                    </div>
                }
            </div>
        );
    }
}
