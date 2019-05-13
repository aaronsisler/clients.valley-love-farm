import React from "react";
import services from "../../content/services";
import Service from "../../components/service";
import "./services.scss";

const Services = () => (
  <div className="services">
    <h3>What We Provide</h3>
    <div className="services__content">
      {services.map(service => (
        <Service key={service.key} {...service} />
      ))}
    </div>
  </div>
);

export default Services;
