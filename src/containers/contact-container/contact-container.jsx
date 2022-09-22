import React from "react";

import { ContactPhone } from "../../components/contact-phone";
import { ContactAddress } from "../../components/contact-address";
import { ContactForm } from "../../components/contact-form";

import styles from "./contact-container.module.scss";

const ContactContainer = () => (
  <div className={styles.contactContainer}>
    <div className={styles.contactContainer__info}>
      <ContactPhone />
      <ContactAddress />
    </div>
    <div className={styles.contactContainer__form}>
      <ContactForm />
    </div>
  </div>
);

export { ContactContainer };
