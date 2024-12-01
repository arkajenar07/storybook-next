import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Molecule/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    spacer: {
      control: "text",
    },
  },
  args: {
    variant: "medium",
    datas: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Details" },
    ],
    spacer: "/",
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {};
Default.args = {
  variant: "medium",
  datas: [
    { label: "Home", href: "/" },
    { label: "Category", href: "/category" },
    { label: "Subcategory", href: "/subcategory" },
    { label: "Details" },
  ],
  spacer: ">",
};
