import React from "react";
import cn from "classnames";

import styles from "./close-x.module.scss";

const CloseX = ({ className, onClick }) => (
  <div className={cn(className, styles.closeX)} onClick={onClick}>
    <div className={styles.closeX__line}></div>
    <div className={styles.closeX__line}></div>
    <div className={styles.closeX__line}></div>
  </div>
);

export { CloseX };
