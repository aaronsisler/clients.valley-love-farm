import React from 'react';

const WidgetsSection = () => (
    <section id="widgets">
        <div id="widget_container">
            <ul className="widget_row">
                <li className="widget">
                    <div className="widget_image">
                        <img src="images/widgets1.png" alt="" />
                    </div>
                    <div className="widget_content">
                        <h4>Sustainable</h4>
                        <p>Free range animals not only benefits the environment, it benefits you too!</p>
                    </div>
                </li>
                <li className="widget">
                    <div className="widget_image">
                        <img src="images/widgets2.png" alt="" />
                    </div>
                    <div className="widget_content">
                        <h4>Healthy</h4>
                        <p>No added antibiotics, chemicals, or hormones means a healthier you</p>
                    </div>
                </li>
                <li className="widget">
                    <div className="widget_image">
                        <img src="images/widgets3.png" alt="" />
                    </div>
                    <div className="widget_content">
                        <h4>Community</h4>
                        <p>Ally with a local farmer and get the best foods they have to offer</p>
                    </div>
                </li>
                <li className="widget">
                    <div className="widget_image">
                        <img src="images/widgets4.png" alt="" />
                    </div>
                    <div className="widget_content">
                        <h4>Responsible</h4>
                        <p>Pasture farming reduces the damages done compared to industrial farming</p>
                    </div>
                </li>
            </ul>
        </div>
        <div id="widget_spacing"></div>
    </section>

);

export default WidgetsSection;
