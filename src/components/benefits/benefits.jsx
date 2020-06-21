import React from "react";
import BenefitCard from "../../components/benefit-card";
import benefits from "../../content/benefits";

import "./benefits.scss";

const Benefits = () => (
  <div className="benefits">
    {benefits.map(benefit => (
      <BenefitCard key={benefit.title} {...benefit} />
    ))}
  </div>
);

export default Benefits;
