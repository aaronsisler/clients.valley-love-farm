import React from "react";
import { sendEmail, isEmailValid } from "../../tools/email";
import FormError from "../form-error";
import "./contact-form.scss";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: "Send It",
      emailAddress: "",
      emailError: false,
      emailSent: false,
      error: {},
      isSendButtonDisabled: true,
      message: "",
      name: "",
      phoneNumber: ""
    };
  }

  handleSubmitContactForm = () => {
    this.setState({ buttonText: "Sending", isSendButtonDisabled: true });

    const { emailAddress, message, name, phoneNumber } = this.state;
    const data = {
      name,
      emailAddress,
      phoneNumber,
      message
    };
    const done = () => this.setState({ emailSent: true });
    const fail = () => this.setState({ emailError: true });
    sendEmail(data, done, fail);
  };

  handleEmailValidation = e => {
    const { value: inputValue } = e.target;

    if (!isEmailValid(inputValue)) {
      return this.setState(
        prevState => ({
          ...prevState,
          error: {
            ...prevState.error,
            emailAddress: "Please enter a valid email address"
          }
        }),
        this.validateRequiredFields()
      );
    }

    return this.setState(
      prevState => ({
        ...prevState,
        error: { ...prevState.error, emailAddress: undefined }
      }),
      this.validateRequiredFields()
    );
  };

  handleInput = e => {
    const { name: inputName, value: inputValue } = e.target;

    return this.setState(prevState => ({
      ...prevState,
      [inputName]: inputValue
    }));
  };

  handleNameValidation = () => {
    if (!this.state.name) {
      return this.setState(
        prevState => ({
          ...prevState,
          error: { ...prevState.error, name: "Please enter your name" }
        }),
        this.validateRequiredFields()
      );
    }

    return this.setState(
      prevState => ({
        ...prevState,
        error: { ...prevState.error, name: undefined }
      }),
      this.validateRequiredFields()
    );
  };

  handlePhoneChange = e => {
    const phoneNumber = e.target.value;

    if (
      !phoneNumber ||
      (phoneNumber.match(/^[0-9]*$/) && phoneNumber.length <= 10)
    ) {
      return this.setState(() => ({ phoneNumber }));
    }
  };

  handlePhoneValidation = () => {
    const { phoneNumber } = this.state;
    if (phoneNumber && phoneNumber.length !== 10) {
      return this.setState(prevState => ({
        ...prevState,
        error: {
          ...prevState.error,
          phoneNumber: "Phone number must be 10 digits"
        }
      }));
    }
    return this.setState(prevState => ({
      ...prevState,
      error: { ...prevState.error, phoneNumber: undefined }
    }));
  };

  validateRequiredFields = () => {
    const { emailAddress, error, name } = this.state;
    const { emailAddress: emailAddressError, name: nameError } = error;

    if (emailAddress && name && !emailAddressError && !nameError) {
      return this.setState({ isSendButtonDisabled: false });
    }

    return this.setState({ isSendButtonDisabled: true });
  };

  render() {
    const {
      emailAddress,
      emailSent,
      emailError,
      error,
      isSendButtonDisabled,
      message,
      name,
      phoneNumber
    } = this.state;
    return (
      <div className="contact-form">
        {!emailSent && !emailError && (
          <React.Fragment>
            <div className="contact-form__header">
              <div className="contact-form__header-content">
                We are more than happy to answer any questions you may have.
              </div>
            </div>
            <div className="contact-form__form">
              <div className="contact-form__form-input">
                {error.name && <FormError error={error.name} />}
                <input
                  name="name"
                  onBlur={this.handleNameValidation}
                  onChange={this.handleInput}
                  placeholder="Name (Required)"
                  type="text"
                  value={name}
                />
              </div>
              <div className="contact-form__form-input">
                {error.emailAddress && <FormError error={error.emailAddress} />}
                <input
                  name="emailAddress"
                  onBlur={this.handleEmailValidation}
                  onChange={this.handleInput}
                  placeholder="Email (Required)"
                  type="text"
                  value={emailAddress}
                />
              </div>
              <div className="contact-form__form-input">
                {error.phoneNumber && <FormError error={error.phoneNumber} />}
                <input
                  name="phone"
                  onBlur={this.handlePhoneValidation}
                  onChange={this.handlePhoneChange}
                  placeholder="Phone (Digits only, no dashes, etc.)"
                  type="text"
                  value={phoneNumber}
                />
              </div>
              <textarea
                name="message"
                rows="4"
                placeholder="What's on your mind?"
                onChange={this.handleInput}
                value={message}
              />
              <button
                className="contact-form__form-button"
                disabled={isSendButtonDisabled}
                onClick={this.handleSubmitContactForm}
              >
                {this.state.buttonText}
              </button>
            </div>
          </React.Fragment>
        )}
        {emailSent && (
          <div className="contact-form__email">
            Thank you for reaching out! We are excited to get back in touch with
            you.
          </div>
        )}
        {emailError && (
          <div className="contact-form__email">
            Something went wrong unfortunately. Please try reloading the page.
          </div>
        )}
      </div>
    );
  }
}
