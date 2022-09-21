import React from "react";

import { ContactForm } from "./contact-form";

const config = {
  title: "Components/ContactForm",
  component: ContactForm,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
export default config;

const Template = (args) => <ContactForm {...args} />;

export const Basic = Template.bind({});
