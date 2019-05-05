import React from "react";
import services from "../../content/services";
import "./services-container.scss";

const ServicesContainer = () => (
  <div className="services_container">
    <div className="services_container__header">
      <div className="services_container__header-title">How Can We Help</div>
      <div className="services_container__header-title-secondary">
        Making Technology Easy
      </div>
    </div>
    <div className="services_container__content">
      {services.map((service, index) => (
        <div key={index} className="services_container__content-service">
          <img
            className="services_container__content-service-image"
            src={service.image.imageLocation}
            alt={service.image.alt}
          />
          <div className="services_container__content-service-title">
            {service.title}.
          </div>
          <div className="services_container__content-service-content">
            {service.content}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ServicesContainer;
