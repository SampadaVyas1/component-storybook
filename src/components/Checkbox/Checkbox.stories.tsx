import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
import styles from './Checkbox.module.scss';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    onChange: action('On Change')
  }
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    value: 'admin',
    disabled: false,
    intermediate: false
  }
};

export const CustomStyling: Story = {
  args: {
    checked: false,
    value: 'admin',
    disabled: false,
    intermediate: false,
    className: styles.customStyle
  }
};
