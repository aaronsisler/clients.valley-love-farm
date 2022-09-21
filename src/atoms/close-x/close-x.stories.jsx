import React from "react";

import { CloseX } from "./close-x";

const config = {
  title: "Atoms/Close-X",
  component: CloseX,
};
export default config;

const Template = (args) => <CloseX {...args} />;

export const Basic = Template.bind({});
