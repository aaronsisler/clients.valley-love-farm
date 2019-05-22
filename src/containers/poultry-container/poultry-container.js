import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FarmTabContent from "../../components/farm-tab-content";
import poultryItems from "../../content/poultry-items";
import "../../styles/react_tabs.scss";
import "./poultry-container.scss";
const { chicken, eggs, chickenSausage } = poultryItems;

const PoultryContainer = () => (
  <div className="poultry-container">
    <div className="poultry-container__header">
      <div className="poultry-container__header-title">
        All Natural Chicken and Eggs
      </div>
      <div className="poultry-container__header-text">
        Our chickens are pasture-raised, which means they are allowed to roam
        the fields, eating the insects and plants they would naturally eat. We
        have also built a one-of-a-kind mobile coop from which we harvest our
        eggs. This gives chickens new environments and pecking grounds to
        explore.
      </div>
      <div className="poultry-container__header-text">
        Our chicken cuts and eggs (compared to factory farm) contain less
        saturated fat, more Vitamin A, and significantly more Omega-3 levels.
      </div>
    </div>
    <div className="poultry-container__content">
      <Tabs>
        <TabList>
          <Tab>Chicken</Tab>
          <Tab>Eggs</Tab>
          <Tab>Chicken Sausage</Tab>
        </TabList>

        <TabPanel>
          <FarmTabContent content={chicken} />
        </TabPanel>
        <TabPanel>
          <FarmTabContent content={eggs} />
        </TabPanel>
        <TabPanel>
          <FarmTabContent content={chickenSausage} />
        </TabPanel>
      </Tabs>
    </div>
  </div>
);

export default PoultryContainer;
