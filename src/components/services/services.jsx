import React from "react";

import { ServiceOption } from "../../components/service-option";
import { serviceOptionsContent } from "../../content/service-options";

import styles from "./services.scss";

const Services = () => (
  <div className={styles.services}>
    <h2 className={styles.services__title}>What We Provide</h2>
    <div className={styles.services__content}>
      {serviceOptionsContent.map((service) => (
        <ServiceOption key={service.key} {...service} />
      ))}
    </div>
  </div>
);

export { Services };
