import React from "react";
import LawnServiceCard from "../lawn-service-card";
import lawnServices from "../../content/lawn-services";
import "./lawn-services.scss";

const LawnServices = () => (
  <div className="lawn-services">
    <div className="lawn-services__header">
      <div className="lawn-services__header-title">
        We put the Care in Lawn Care!
      </div>
      <div className="lawn-services__header-text">
        We see lawn care as weekly maintenance, not as a bi-weekly chore. Your
        lawn will always look in tip top shape, even during the rainy season.
        With our weekly schedule, your lawn will not only look great every week,
        but you will be getting the most &quot;Bang for your buck&quot; compared
        to other competitors.
      </div>
    </div>
    <div className="lawn-services__content">
      {lawnServices.map((lawnService, index) => (
        <LawnServiceCard key={index} {...lawnService} />
      ))}
    </div>
    <div className="lawn-services__disclaimer">
      Prices above based on average sized subdivision yard
    </div>
  </div>
);

export default LawnServices;
