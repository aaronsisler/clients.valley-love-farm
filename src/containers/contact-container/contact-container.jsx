import React from "react";
import ContactPhone from "../../components/contact-phone";
import ContactAddress from "../../components/contact-address";
import ContactForm from "../../components/contact-form";

import styles from "./contact-container.scss";

const ContactContainer = () => (
  <div className={styles.contact - container}>
    <div className={styles.contact - container__info}>
      <ContactPhone />
      <ContactAddress />
    </div>
    <div className={styles.contact - container__form}>
      <ContactForm />
    </div>
  </div>
);

export { ContactContainer;
