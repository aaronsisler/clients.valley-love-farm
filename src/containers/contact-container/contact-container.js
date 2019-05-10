import React from "react";
import ContactForm from "../../components/contact-form";
import "./contact-container.scss";

class ContactContainer extends React.Component {
  render() {
    return (
      <div className="contact_container">
        <div className="contact_container__content">
          <div className="contact_container__content-title">Contact Us</div>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default ContactContainer;
