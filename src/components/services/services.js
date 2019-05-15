import React from "react";
import services from "../../content/services";
import Service from "../../components/service";
import "./services.scss";

const Services = () => (
  <div className="services">
    <div className="services__title">What We Provide</div>
    <div className="services__content">
      {services.map(service => (
        <Service key={service.key} {...service} />
      ))}
    </div>
  </div>
);

export default Services;
