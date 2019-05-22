import React from "react";
import LawnServiceCard from "../lawn-service-card";
import lawnAdditionalServices from "../../content/lawn-additional-services";
import "./lawn-additional-services.scss";

const LawnAdditionalServices = () => (
  <div className="lawn-additional-services">
    <div className="lawn-additional-services__header">
      <div className="lawn-additional-services__header-title">
        Need more done?
      </div>
      <div className="lawn-additional-services__header-text">
        We also provide additional services that provide a much needed break
        from the &quot;Spring Cleaning&quot; chores regarding the outside of
        your home. These range from cleaning out those overflowing gutters to
        pressure washing your driveway to give it like &quot;Like New&quot;
        look.
      </div>
    </div>
    <div className="lawn-additional-services__content">
      {lawnAdditionalServices.map((lawnAdditionalService, index) => (
        <LawnServiceCard key={index} {...lawnAdditionalService} />
      ))}
    </div>
  </div>
);

export default LawnAdditionalServices;
