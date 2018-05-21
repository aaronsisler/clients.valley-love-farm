import React from 'react';

const WidgetsSection = () => (
    <div>
        <section id="widgets">
            <ul className="widget_row">
                <li className="widget">
                    <img src="images/widgets1.png" className="" alt="" />
                    <h4>Sustainable</h4>
                    <p>Free range animals not only benefits the environment, it benefits you too!</p>
                </li>
                <li className="widget">
                    <img src="images/widgets2.png" className="" alt="" />
                    <h4>Healthy</h4>
                    <p>No added antibiotics, chemicals, or hormones means a healthier you</p>
                </li>
                <li className="widget">
                    <img src="images/widgets4.png" className="" alt="" />
                    <h4>Community</h4>
                    <p>Ally with a local farmer and get the best foods they have to offer</p>
                </li>
                <li className="widget">
                    <img src="images/widgets3.png" className="" alt="" />
                    <h4>Responsible</h4>
                    <p>Pasture farming reduces the damages done compared to industrial farming</p>
                </li>
            </ul>
        </section>
        <section id="widget_spacing"></section>
    </div>
);

export default WidgetsSection;
