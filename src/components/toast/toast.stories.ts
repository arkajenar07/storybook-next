import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './toast';

const meta: Meta<typeof Toast> = {
  title: 'Molecule/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select", options: ["success", "danger", "warning"] },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    type: {
      control: { type: "select", options: ["notification", "information"] },
    },
  },
  args: {
    variant: "success",
    size: "medium",
    type: "notification",
    title: "Default Title",
    message: "This is a default toast message.",
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const SuccessNotification: Story = {
  args: {
    variant: "success",
    size: "medium",
    type: "notification",
    title: "Success",
    message: "Your operation was successful.",
  },
};

export const DangerInformation: Story = {
  args: {
    variant: "danger",
    size: "large",
    type: "information",
    title: "Error",
    message: "There was an issue processing your request.",
  },
};

export const WarningSmall: Story = {
  args: {
    variant: "warning",
    size: "small",
    type: "notification",
    title: "Warning",
    message: "This action may have consequences.",
  },
};
