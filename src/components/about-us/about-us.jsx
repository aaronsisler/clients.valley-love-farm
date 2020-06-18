import React from "react";
import Image from "../../atoms/image";
import { CDN_URL } from "../../config";

import "./about-us.scss";

const aboutImage = {
  altText: "Farmer feeding chicken",
  src: `${CDN_URL}/landing/landing-container__about.jpg`
};

const AboutUs = () => (
  <div className="about-us">
    <h2 className="about-us__title">About Us</h2>
    <div className="about-us__content">
      <div className="about-us__image">
        <Image {...aboutImage} />
      </div>
      <div className="about-us__text">
        <p>
          <strong>Valley Love Farm</strong> was started to bring high quality
          produce to local customers. We work hard to maintain sustainable and
          environmentally friendly practices by allowing our chickens to range
          free. This provides benefits to the environment and produces a
          healthier chicken, which in turn provides a healthier you!
        </p>
        <p>
          <strong>Community Supported Agriculture (CSA)</strong> is the perfect
          way for a customer, who cares about local food, to ally with a farmer
          and get the best they have to offer.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
