import React from 'react';

const AboutSection = () => (
    <section id="about">
        <div className="container">
            <h3>About us</h3>
            <div className="about_row">
                <div className="about_image">
                    <img src="images/abt.jpg" alt="about us" />
                </div>
                <div className="about_content">
                    <p>
                        <strong>Valley Love Farm</strong> was started to bring high quality produce to local customers.
                        We work hard to maintain sustainable and environmentally friendly practices by allowing our
                        chickens to range free. This provides benefits to the environment
                        and produces a healthier chicken, which in turn provides a healthier you!
					</p>
                    <p>
                        <strong>Community Supported Agriculture (CSA)</strong> is the perfect way for a customer, who cares about local food, to ally
                        with a farmer and get the best they have to offer.
					</p>
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;
