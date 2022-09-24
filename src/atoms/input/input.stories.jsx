import React from "react";

import { Input } from "./input";

const config = {
  title: "Atoms/Input",
  component: Input,
};

export default config;

const Template = (args) => <Input {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  errorMessage: "Name is required",
  hasError: false,
  label: "Name",
  name: "Name",
  registerProp: () => ({}),
};
