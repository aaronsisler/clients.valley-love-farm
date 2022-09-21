import React from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import FarmTabPanel from "../../components/farm-tab-panel";
import { chicken, eggs, chickenSausage } from "../../content/poultry-items";

import "../../styles/react_tabs.scss";
import styles from "./poultry-container.scss";

const PoultryContainer = () => (
  <div className={styles.poultry - container}>
    <div className={styles.poultry - container__header}>
      <div className={styles.poultry - container__header - title}>
        All Natural Chicken and Eggs
      </div>
      <div className={styles.poultry - container__header - text}>
        Our chickens are pasture-raised, which means they are allowed to roam
        the fields, eating the insects and plants they would naturally eat. We
        have also built a one-of-a-kind mobile coop from which we harvest our
        eggs. This gives chickens new environments and pecking grounds to
        explore.
      </div>
      <div className={styles.poultry - container__header - text}>
        Our chicken cuts and eggs (compared to factory farm) contain less
        saturated fat, more Vitamin A, and significantly more Omega-3 levels.
      </div>
    </div>
    <div className={styles.poultry - container__content}>
      <Tabs>
        <TabList>
          <Tab>Chicken</Tab>
          <Tab>Eggs</Tab>
          <Tab>Chicken Sausage</Tab>
        </TabList>
        <FarmTabPanel content={chicken} />
        <FarmTabPanel content={eggs} />
        <FarmTabPanel content={chickenSausage} />
      </Tabs>
    </div>
  </div>
);

export default PoultryContainer;
