import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';
import styles from './Radio.module.scss';

const meta: Meta<typeof Radio> = {
  title: 'components/Radio',
  component: Radio,
  args: {
    onChange: action('onChange')
  }
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false
  }
};

export const CustomStyling: Story = {
  args: {
    checked: false,
    disabled: false,
    radioContainerProps: {
      className: styles.customContainerStyle
    }
  }
};
