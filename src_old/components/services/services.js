import React from "react";
import services from "../../content/service-options";
import Option from "../../components/option";
import "./services.scss";

const Services = () => (
  <div className="services">
    <div className="services__title">What We Provide</div>
    <div className="services__content">
      {services.map(service => (
        <Option key={service.key} {...service} />
      ))}
    </div>
  </div>
);

export default Services;
