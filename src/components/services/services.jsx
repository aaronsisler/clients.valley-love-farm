import React from "react";
import services from "../../content/service-options";
import ServiceOption from "../../components/service-option";

import "./services.scss";

const Services = () => (
  <div className="services">
    <h2 className="services__title">What We Provide</h2>
    <div className="services__content">
      {services.map(service => (
        <ServiceOption key={service.key} {...service} />
      ))}
    </div>
  </div>
);

export default Services;
