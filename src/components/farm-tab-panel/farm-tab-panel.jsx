import React from "react";
import PropTypes from "prop-types";
import { TabPanel } from "react-tabs";
import FarmCard from "../farm-card";

import styles from "./farm-tab-panel.scss";

const FarmTabPanel = ({ content, ...otherProps }) => (
  <TabPanel className={styles.farm-tab-panel" {...otherProps}>
    <div className={styles.farm-tab-panel__content}>
      {content.map((item, index) => (
        <FarmCard key={index} {...item} />
      ))}
    </div>
  </TabPanel>
);

FarmTabPanel.tabsRole = "TabPanel";

FarmTabPanel.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  ).isRequired
};

export { FarmTabPanel;
