import React from "react";
import { Tab, Tabs, TabList } from "react-tabs";

import { FarmTabPanel } from "../../components/farm-tab-panel";
import { beef, pork, porkSausage } from "../../content/livestock-items";

import styles from "./livestock-container.module.scss";

const LivestockContainer = () => (
  <div className={styles.livestockContainer}>
    <div className={styles.livestockContainer__header}>
      <div className={styles.livestockContainer__headerTitle}>
        All Natural Livestock
      </div>
      <div className={styles.livestockContainer__headerText}>
        Our pigs and cattle are pasture-raised, which means they are allowed to
        roam the fields, eating the insects and plants they would naturally eat.
      </div>
      <div className={styles.livestockContainer__headerText}>
        Our pork and beef cuts (compared to factory farm) contain more Vitamin E
        and significantly more Omega-3 levels.
      </div>
    </div>
    <div className={styles.livestockContainer__content}>
      <Tabs>
        <TabList>
          <Tab>Pork</Tab>
          <Tab>Pork Sausage</Tab>
          <Tab>Beef</Tab>
        </TabList>
        <FarmTabPanel content={pork} />
        <FarmTabPanel content={porkSausage} />
        <FarmTabPanel content={beef} />
      </Tabs>
    </div>
  </div>
);

export { LivestockContainer };
