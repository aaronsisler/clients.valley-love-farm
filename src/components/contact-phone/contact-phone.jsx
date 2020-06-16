import React from "react";
import { CONTACT_PHONE_NUMBER } from "../../config";

import "./contact-phone.scss";

const ContactPhone = () => (
  <div className="contact-phone">
    <h2>Give us a call</h2>
    <span>{CONTACT_PHONE_NUMBER}</span>
  </div>
);

export default ContactPhone;
