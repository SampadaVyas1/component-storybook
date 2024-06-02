import { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    variant: {
      control: false
    }
  }
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    variant: 'H1',
    className: 'user-defined-css-class',
    children: <span>Heading 1</span>
  }
};

export const H2: Story = {
  args: {
    variant: 'H2',
    className: 'user-defined-css-class',
    children: <span>Heading 2</span>
  }
};

export const H3: Story = {
  args: {
    variant: 'H3',
    className: 'user-defined-css-class',
    children: <span>Heading 3</span>
  }
};

export const H4: Story = {
  args: {
    variant: 'H4',
    className: 'user-defined-css-class',
    children: <span>Heading 4</span>
  }
};

export const H5: Story = {
  args: {
    variant: 'H5',
    className: 'user-defined-css-class',
    children: <span>Heading 5</span>
  }
};
