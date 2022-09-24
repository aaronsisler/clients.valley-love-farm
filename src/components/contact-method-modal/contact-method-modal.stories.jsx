import React from "react";

import { ContactMethodModal } from "./contact-method-modal";
import { ContactFormWidget } from "../../widgets/contact-form-widget";
import { ContactPhoneWidget } from "../../widgets/contact-phone-widget";

const config = {
  title: "Components/ContactMethodModal",
  component: ContactMethodModal,
};
export default config;

const Template = (args) => <ContactMethodModal {...args} />;

export const Basic = Template.bind({});
export const PhoneWidget = Template.bind({});
export const FormWidget = Template.bind({});

Basic.args = {
  isOpen: true,
  children: <div>I am the opened Contact Modal</div>,
};

PhoneWidget.args = {
  isOpen: true,
  children: <ContactPhoneWidget />,
};

FormWidget.args = {
  isOpen: true,
  children: <ContactFormWidget />,
};
