import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FarmTabContent from "../../components/farm-tab-content";
import porkItems from "../../content/pork-items";
import "../../styles/react_tabs.scss";
import "./pork-container.scss";
const { pork, porkSausage } = porkItems;

const PorkContainer = () => (
  <div className="pork-container">
    <div className="pork-container__header">
      <div className="pork-container__header-title">All Natural Pork</div>
      <div className="pork-container__header-text">
        Our pigs are pasture-raised, which means they are allowed to roam the
        fields, eating the insects and plants they would naturally eat.
      </div>
      <div className="pork-container__header-text">
        Our pork cuts (compared to factory farm) contain more Vitamin E and
        significantly more Omega-3 levels.
      </div>
    </div>
    <div className="pork-container__content">
      <Tabs>
        <TabList>
          <Tab>Pork</Tab>
          <Tab>Pork Sausage</Tab>
        </TabList>

        <TabPanel>
          <FarmTabContent content={pork} />
        </TabPanel>
        <TabPanel>
          <FarmTabContent content={porkSausage} />
        </TabPanel>
      </Tabs>
    </div>
  </div>
);

export default PorkContainer;
