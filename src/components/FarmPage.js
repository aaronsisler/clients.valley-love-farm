import React from 'react';
import { Link } from 'react-router-dom';

const FarmPage = () => (
    <section id="farm">
        <div className="container">
            <div className="farm_header">
                <h3>Find the best option that works for you</h3>
                <p>
                    We understand that no two family&#39;s needs are the same. This is why we offer many options to you to ensure there
                    something that works for both you and your budget. We also have bulk purchasing available on request.
                </p>
            </div>
            <div className="choices_row">
                <div className="choice">
                    <div className="choice_image">
                        <img src="images/choices1.jpg" alt="Choice 1" />
                    </div>
                    <div className="choice_content">
                        <h4>Chicken & Eggs</h4>
                        <p>
                            Our chickens and pigs are pasture-raised, which means they are allowed to roam the fields,
                            eating the insects and plants they would naturally eat. Happy animals means meat and eggs
                            with higher Omega-3s and Vitamins A, B<sub>6</sub>, B<sub>12</sub>, D, and E.
                        </p>
                        <Link to="/poultry" className="link">Check Prices</Link>
                    </div>
                </div>
                <div className="choice">
                    <div className="choice_image">
                        <img src="images/choices2.jpg" alt="Choice 2" />
                    </div>
                    <div className="choice_content">
                        <h4>Pork & Sausage</h4>
                        <p>
                            Our pigs are raised roaming free in the pastures of native grasses and plant life. Pork from our farm (compared
                            to factory-farm) contain absolutely no added antibiotics or hormones and higher​ levels of Omega-3s and Vitamin E.
                        </p>
                        <Link to="/pork" className="link">Check Prices</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default FarmPage;
