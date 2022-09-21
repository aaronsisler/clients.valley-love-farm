import React from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import FarmTabPanel from "../../components/farm-tab-panel";
import { pork, porkSausage } from "../../content/pork-items";

import "../../styles/react_tabs.scss";
import styles from "./pork-container.scss";

const PoultryContainer = () => (
  <div className={styles.pork - container}>
    <div className={styles.pork - container__header}>
      <div className={styles.pork - container__header - title}>
        All Natural Pork
      </div>
      <div className={styles.pork - container__header - text}>
        Our pigs are pasture-raised, which means they are allowed to roam the
        fields, eating the insects and plants they would naturally eat.
      </div>
      <div className={styles.pork - container__header - text}>
        Our pork cuts (compared to factory farm) contain more Vitamin E and
        significantly more Omega-3 levels.
      </div>
    </div>
    <div className={styles.pork - container__content}>
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

export { PoultryContainer;
