import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import   { Input }  from './input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Templates Library Test/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0'
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Email'
  },
};
export const Image: Story = {
  args: {
    type: 'file',
    placeholder: 'download image'
  },
};


export const Disabled: Story = {
  args: {
    type: 'file',
    placeholder: 'download image',
    disabled: true
  },
};
