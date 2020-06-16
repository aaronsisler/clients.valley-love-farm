import React from "react";
import Image from "../../atoms/image";
import Hyperlink from "../../atoms/hyperlink";
import { getCdnUrl } from "../../utils";

import "./landing-container.scss";

const CDN_URL = getCdnUrl("/landing");

const splashImage = {
  altText: "Flowers on the front outdoor porch",
  src: `${CDN_URL}/landing-container__splash.jpg`
};
const outdoorImage = {
  altText: "Picture of the front of facility",
  src: `${CDN_URL}/landing-container__second.jpg`
};

const LandingContainer = () => (
  <div className="landing-container">
    <Image className="landing-container__splash-image" {...splashImage} />
    <div className="landing-container__content">
      <h1 className="landing-container__content-title">
        Life is better at Waterbrooke
      </h1>
      <p>
        Located in the beautiful and historic “Harbor of Hospitality”,
        Waterbrooke of Elizabeth City is a licensed assisted living community.
        We are conveniently located next to the Sentara Albemarle Hospital with
        access to many local healthcare providers.
      </p>
      <p>
        You will find days with fewer worries, more options, and a community
        that feels just like home. Find a sense of belonging in our community of
        friends by&nbsp;
        <Hyperlink href="/daily-life" title="learning more here." />
      </p>
    </div>
    <Image className="landing-container__second-image" {...outdoorImage} />
    <div className="landing-container__content">
      <h2 className="landing-container__content-sec-title">
        Not sure where to begin?
      </h2>
      <p>
        Sometimes it is hard to know what questions to even begin asking when it
        comes to the care of your loved ones. We are here to help you understand
        what we can provide and recommend&nbsp;
        <Hyperlink href="/why-assisted-living" title="starting here." />
      </p>
    </div>
  </div>
);

export default LandingContainer;
