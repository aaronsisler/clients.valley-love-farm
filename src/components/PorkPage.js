import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import pork from '../content/pork';

const PorkPage = () => (
    <section id="pork">
        <div className="container">
            <div className="pork_header">
                <h3>All Natural Pork</h3>
                <p>
                    Our pigs are pasture-raised, which means they are allowed to roam the fields, eating the insects and plants they
                    would naturally eat.
                </p>
                <p>
                    Our pork cuts (compared to factory farm) contain more Vitamin E and significantly more Omega-3 levels.
                </p>
            </div>
            <div className="pork_content">
                <Tabs>
                    <TabList>
                        <Tab>Pork</Tab>
                        <Tab>Pork Sausage</Tab>
                    </TabList>

                    <TabPanel>
                        <ul className="tab_content">
                            {pork.pork.map((item, index) => (
                                <li className="tab_item" key={index}>
                                    <h4>{item.title}</h4>
                                    <h5>{item.price}</h5>
                                </li>
                            ))}
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <ul className="tab_content">
                            {pork.porkSausage.map((item, index) => (
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

export default PorkPage;
