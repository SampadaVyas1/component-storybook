import { Meta, StoryObj } from '@storybook/react';
import Paragraph from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Components/Paragraph',
  component: Paragraph,
  argTypes: {
    variant: {
      control: false
    }
  }
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Light: Story = {
  args: {
    variant: 'Light',
    className: 'user-defined-css-class',
    children: <span>Light Text</span>
  }
};

export const Regular: Story = {
  args: {
    variant: 'Regular',
    className: 'user-defined-css-class',
    children: <span>Regular Text</span>
  }
};

export const Medium: Story = {
  args: {
    variant: 'Medium',
    className: 'user-defined-css-class',
    children: <span>Medium Text</span>
  }
};

export const Bold: Story = {
  args: {
    variant: 'Bold',
    className: 'user-defined-css-class',
    children: <span>Bold Text</span>
  }
};

// export const ExtraBold: Story = {
//     args: {
//         type: "ExtraBold",
//         className: "user-defined-css-class",
//          children: <span>Extra Bold Text</span>
//     }
// };
