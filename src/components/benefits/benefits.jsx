import React from "react";

import { BenefitCard } from "../../components/benefit-card";
import { benefitsContent } from "../../content/benefits";

import styles from "./benefits.module.scss";

const Benefits = () => (
  <div className={styles.benefits}>
    {benefitsContent.map((benefit) => (
      <BenefitCard key={benefit.title} {...benefit} />
    ))}
  </div>
);

export { Benefits };
