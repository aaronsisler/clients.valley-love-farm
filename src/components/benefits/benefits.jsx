import React from "react";
import BenefitCard from "../../components/benefit-card";
import benefits from "../../content/benefits";

import styles from "./benefits.scss";

const Benefits = () => (
  <div className={styles.benefits}>
    {benefits.map((benefit) => (
      <BenefitCard key={benefit.title} {...benefit} />
    ))}
  </div>
);

export default Benefits;
