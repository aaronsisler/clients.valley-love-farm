import React from "react";
import ContactPhone from "../../components/contact-phone";
import ContactAddress from "../../components/contact-address";
import ContactForm from "../../components/contact-form";

import "./contact-container.scss";

const ContactContainer = () => (
  <div className="contact-container">
    <div className="contact-container__content">
      <div className="contact-container__visit">
        <ContactPhone />
        <ContactAddress />
      </div>
      <ContactForm />
    </div>
  </div>
);

export default ContactContainer;
