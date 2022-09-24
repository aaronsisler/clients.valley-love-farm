import React from "react";

import { ContactEmailSentWidget } from "./contact-email-sent-widget";

const config = {
  title: "Widgets/ContactEmailSentWidget",
  component: ContactEmailSentWidget,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
export { config;

const Template = (args) => <ContactEmailSentWidget {...args} />;

export const Basic = Template.bind({});
