import { Group } from "./Group";

export default {
  title: "Components/Group",
  component: Group,
  argTypes: {
    property1: {
      options: ["default", "variant-5", "variant-2", "variant-3", "variant-4"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    text: "Legazpi",
  },
};
