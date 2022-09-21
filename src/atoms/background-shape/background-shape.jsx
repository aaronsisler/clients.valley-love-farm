import React from "react";

import styles from "./background-shape.module.scss";

const BackgroundShape = () => (
  <div className={styles.backgroundShape}>
    <div className={styles.backgroundShape__drawing} />
  </div>
);

export { BackgroundShape };
