import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';

const meta: Meta<typeof Modal> = {
  title: 'Molecule/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['simple', 'rounded'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    positiveLabel: {
      control: 'text',
    },
    negativeLabel: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    onSubmit: { action: 'submitted' },
    onCancel: { action: 'cancelled' },
  },
  args: {
    type: 'simple',
    size: 'medium',
    title: 'Default Title',
    description: 'Default Description',
    positiveLabel: 'Submit',
    negativeLabel: 'Cancel',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    type: 'simple',
    size: 'medium',
    title: 'Default Modal',
    description: 'This is the default modal with default properties.',
  },
};

export const CustomLabels: Story = {
  args: {
    type: 'rounded',
    size: 'large',
    title: 'Custom Labels Modal',
    description: 'This modal has custom labels for the buttons.',
    positiveLabel: 'Yes, Proceed',
    negativeLabel: 'No, Go Back',
  },
};