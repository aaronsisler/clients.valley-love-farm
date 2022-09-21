import React from "react";

import { ContactForm } from "../../components/contact-form";

import styles from "./contact-form-widget.module.scss";

const ContactFormWidget = () => (
  <div className={styles.contactFormWidget}>
    <ContactForm />
  </div>
);

export { ContactFormWidget };
