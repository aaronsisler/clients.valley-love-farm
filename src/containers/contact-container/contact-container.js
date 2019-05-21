import React from "react";
import ContactForm from "../../components/contact-form";
import ContactPhone from "../../components/contact-phone";
import "./contact-container.scss";

class ContactContainer extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-container__upper">
          <div className="contact-container__upper-title">
            Send us a message
          </div>
          <ContactForm />
        </div>
        <div className="contact-container__lower">
          <ContactPhone />
        </div>
      </div>
    );
  }
}

export default ContactContainer;
