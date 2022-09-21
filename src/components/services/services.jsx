import React from "react";

import ServiceOption from "../../components/service-option";
import { serviceOptionsContent } from "../../content/service-options";

import "./services.scss";

const Services = () => (
  <div className="services">
    <h2 className="services__title">What We Provide</h2>
    <div className="services__content">
      {serviceOptionsContent.map((service) => (
        <ServiceOption key={service.key} {...service} />
      ))}
    </div>
  </div>
);

export { Services };
