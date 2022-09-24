import React from "react";

import { ContactPhoneWidget } from "./contact-phone-widget";

const config = {
  title: "Widgets/ContactPhoneWidget",
  component: ContactPhoneWidget,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
export default config;

const Template = (args) => <ContactPhoneWidget {...args} />;

export const Basic = Template.bind({});
