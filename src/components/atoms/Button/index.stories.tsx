import React from "react";
import { Meta } from "@storybook/react";
import Button from ".";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta;

export const basicButton: React.FC = () => {
  return <Button />;
};
