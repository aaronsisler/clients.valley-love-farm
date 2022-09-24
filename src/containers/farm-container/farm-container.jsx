import React from "react";

import { FarmOption } from "../../components/farm-option";
import { farmOptions } from "../../content/farm-options";

import styles from "./farm-container.module.scss";

const FarmContainer = () => (
  <div className={styles.farmContainer}>
    <div className={styles.farmContainer__header}>
      <div className={styles.farmContainer__headerTitle}>
        Find the best option that works for you
      </div>
      <div className={styles.farmContainer__headerText}>
        We understand that no two family&#39;s needs are the same. This is why
        we offer many options to you to ensure there something that works for
        both you and your budget. We also have bulk purchasing available on
        request.
      </div>
    </div>
    <div className={styles.farmContainer__content}>
      {farmOptions.map((farmOption) => (
        <FarmOption key={farmOption.key} {...farmOption} />
      ))}
    </div>
  </div>
);

export { FarmContainer };
