import React from "react";
import ExternalLink from "../../atoms/external-link";
import { CONTACT_ADDRESS, GOOGLE_MAPS_LOCATION } from "../../config";

import "./contact-address.scss";

const [streetAddress, cityStateZip] = CONTACT_ADDRESS;

const ContactAddress = () => (
  <div className="contact-address">
    <p>{streetAddress}</p>
    <p>{cityStateZip}</p>
    <ExternalLink
      href={GOOGLE_MAPS_LOCATION}
      title="Get directions"
      className="contact-address__nav-link"
    />
  </div>
);

export default ContactAddress;
