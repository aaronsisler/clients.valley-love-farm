import React from "react";
import "./about-us.scss";

const AboutUs = () => (
  <div className="about-us">
    <div className="about-us__title">About us</div>
    <div className="about-us__content">
      <div className="about-us__content-image">
        <img src="images/about/about.jpg" alt="about us" />
      </div>
      <div className="about-us__content-text">
        <div>
          <strong>Valley Love Farm</strong> was started to bring high quality
          produce to local customers. We work hard to maintain sustainable and
          environmentally friendly practices by allowing our chickens to range
          free. This provides benefits to the environment and produces a
          healthier chicken, which in turn provides a healthier you!
        </div>
        <div>
          <strong>Community Supported Agriculture (CSA)</strong> is the perfect
          way for a customer, who cares about local food, to ally with a farmer
          and get the best they have to offer.
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
