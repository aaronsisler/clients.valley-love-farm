import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => (
    <section id="services">
        <div className="container">
            <h3>What We Provide</h3>
            <div className="services_row">
                <div className="service">
                    <div className="service_image">
                        <img src="images/services1.jpg" alt="service 1" />
                    </div>
                    <div className="service_content">
                        <h4>Farm to Table</h4>
                        <p>
                            Our chickens and pigs are pasture-raised, which means they are allowed to roam the fields,
                            eating the insects and plants they would naturally eat. Happy animals means meat and eggs
                            with higher Omega-3s and Vitamins A, B<sub>6</sub>, B<sub>12</sub>, D, and E.
                        </p>
                        <Link to="/farm" className="link">Find Out More</Link>
                    </div>
                </div>
                <div className="service">
                    <div className="service_image">
                        <img src="images/services2.jpg" alt="service 2" />
                    </div>
                    <div className="service_content">
                        <h4>Lawn Services</h4>
                        <p>
                            We see lawn care as weekly maintenance, not as a bi-weekly chore. Our weekly schedule will
                            keep your yard in tip top shape, and you will be getting the most &quot;Bang for your buck&quot;
                            compared to other competitors.
                        </p>
                        <Link to="/lawn" className="link">Find Out More</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ServicesSection;
