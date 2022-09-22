import React from "react";
import { Tab, Tabs, TabList } from "react-tabs";

import { FarmTabPanel } from "../../components/farm-tab-panel";
import { pork, porkSausage } from "../../content/pork-items";

import styles from "./pork-container.module.scss";

const PorkContainer = () => (
  <div className={styles.porkContainer}>
    <div className={styles.porkContainer__header}>
      <div className={styles.porkContainer__headerTitle}>All Natural Pork</div>
      <div className={styles.porkContainer__headerText}>
        Our pigs are pasture-raised, which means they are allowed to roam the
        fields, eating the insects and plants they would naturally eat.
      </div>
      <div className={styles.porkContainer__headerText}>
        Our pork cuts (compared to factory farm) contain more Vitamin E and
        significantly more Omega-3 levels.
      </div>
    </div>
    <div className={styles.porkContainer__content}>
      <Tabs>
        <TabList>
          <Tab>Pork</Tab>
          <Tab>Pork Sausage</Tab>
        </TabList>
        <FarmTabPanel content={pork} />
        <FarmTabPanel content={porkSausage} />
      </Tabs>
    </div>
  </div>
);

export { PorkContainer };
