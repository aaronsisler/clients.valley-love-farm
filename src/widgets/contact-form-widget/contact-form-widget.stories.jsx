import React from "react";

import { ContactFormWidget } from "./contact-form-widget";

const config = {
  title: "Widgets/ContactFormWidget",
  component: ContactFormWidget,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
export { config;

const Template = (args) => <ContactFormWidget {...args} />;

export const Basic = Template.bind({});
