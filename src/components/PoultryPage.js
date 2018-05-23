import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import poultry from '../content/poultry';

const PoultryPage = () => (
    <section id="poultry">
        <div className="container">
            <div className="poultry_header">
                <h3>All Natural Chicken and Eggs</h3>
                <p>
                    Our chickens are pasture-raised, which means they are allowed to roam the fields, eating the insects and plants
                    they would naturally eat. We have also built a one-of-a-kind mobile coop from which we harvest our eggs.
                    This gives chickens new environments and pecking grounds to explore.
                </p>
                <p>
                    Our chicken cuts and eggs (compared to factory farm) contain less saturated fat, more Vitamin A, and significantly more Omega-3
                    levels.
                </p>
            </div>
            <div className="poultry_content">
                <Tabs>
                    <TabList>
                        <Tab>Chicken</Tab>
                        <Tab>Eggs</Tab>
                        <Tab>Chicken Sausage</Tab>
                    </TabList>

                    <TabPanel>
                        <ul className="tab_content">
                            {poultry.chicken.map((item, index) => (
                                <li className="tab_item" key={index}>
                                    <h4>{item.title}</h4>
                                    <h5>{item.price}</h5>
                                </li>
                            ))}
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <ul className="tab_content">
                            {poultry.eggs.map((item, index) => (
                                <li className="tab_item" key={index}>
                                    <h4>{item.title}</h4>
                                    <h5>{item.price}</h5>
                                </li>
                            ))}
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <ul className="tab_content">
                            {poultry.chickenSausage.map((item, index) => (
                                <li className="tab_item" key={index}>
                                    <h4>{item.title}</h4>
                                    <h5>{item.price}</h5>
                                </li>
                            ))}
                        </ul>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    </section>
);

export default PoultryPage;
