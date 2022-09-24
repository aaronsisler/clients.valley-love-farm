import React from "react";

import { Hyperlink } from "../../atoms/hyperlink";

import styles from "./error-container.module.scss";

const ErrorContainer = () => (
  <div className={styles.errorContainer}>
    <h2 className={styles.errorContainer__title}>
      Rut roh....something went wrong.
    </h2>
    <p>
      Please go back to the&nbsp;
      <Hyperlink href="/" title="home page" />.
    </p>
  </div>
);

export { ErrorContainer };
