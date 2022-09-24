import React from "react";

import { CONTACT_PHONE_NUMBER } from "../../config";

import styles from "./contact-phone-widget.module.scss";

const ContactPhoneWidget = () => (
  <div className={styles.contactPhoneWidget}>
    <h2>Give us a ring!</h2>
    <a href={`tel:${CONTACT_PHONE_NUMBER}`}>{CONTACT_PHONE_NUMBER}</a>
  </div>
);

export { ContactPhoneWidget };
