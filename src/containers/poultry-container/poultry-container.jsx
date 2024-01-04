import React from "react";
import { Tab, Tabs, TabList } from "react-tabs";

import { FarmTabPanel } from "../../components/farm-tab-panel";
import {
  chicken,
  eggs,
  chickenSausage,
  turkey,
  turkeySausage,
} from "../../content/poultry-items";

import styles from "./poultry-container.module.scss";

const PoultryContainer = () => (
  <div className={styles.poultryContainer}>
    <div className={styles.poultryContainer__header}>
      <div className={styles.poultryContainer__headerTitle}>
        All Natural Chicken, Turkey, and Chicken Eggs
      </div>
      <div className={styles.poultryContainer__headerText}>
        Our chickens and turkeys are pasture-raised, which means they are
        allowed to roam the fields, eating the insects and plants they would
        naturally eat. We have also built a one-of-a-kind mobile coop from which
        we harvest our eggs. This gives them new environments and pecking
        grounds to explore.
      </div>
      <div className={styles.poultryContainer__headerText}>
        Our chicken cuts, chicken eggs, and turkey cuts (compared to factory
        farm) contain less saturated fat, more Vitamin A, and significantly more
        Omega-3 levels.
      </div>
    </div>
    <div className={styles.poultryContainer__content}>
      <Tabs>
        <TabList>
          <Tab>Chicken</Tab>
          <Tab>Eggs</Tab>
          <Tab>Chicken Sausage</Tab>
          <Tab>Turkey</Tab>
          <Tab>Turkey Sausage</Tab>
        </TabList>
        <FarmTabPanel content={chicken} />
        <FarmTabPanel content={eggs} />
        <FarmTabPanel content={chickenSausage} />
        <FarmTabPanel content={turkey} />
        <FarmTabPanel content={turkeySausage} />
      </Tabs>
    </div>
  </div>
);

export { PoultryContainer };
