import React from "react";
import FarmOption from "../../components/farm-option";
import farmOptions from "../../content/farm-options";

import styles from "./farm-container.scss";

const FarmContainer = () => (
  <div className={styles.farm - container}>
    <div className={styles.farm - container__header}>
      <div className={styles.farm - container__header - title}>
        Find the best option that works for you
      </div>
      <div className={styles.farm - container__header - text}>
        We understand that no two family&#39;s needs are the same. This is why
        we offer many options to you to ensure there something that works for
        both you and your budget. We also have bulk purchasing available on
        request.
      </div>
    </div>
    <div className={styles.farm - container__content}>
      {farmOptions.map((farmOption) => (
        <FarmOption key={farmOption.key} {...farmOption} />
      ))}
    </div>
  </div>
);

export { FarmContainer };
