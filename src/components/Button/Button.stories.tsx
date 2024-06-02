import { StoryObj, Meta } from '@storybook/react';
import { Button } from './Button';
import { Typography } from '../../components/Typography/Typography';
import styles from './Button.module.scss';
import ChevronDownIcon from '../../icons/ChevronDownIcon';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: false
    },
    size: {
      control: 'select',
      options: ['Large', 'Medium', 'Small', 'X-Small']
    }
  }
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    variant: 'Primary',
    disabled: false,
    children: (
      <>
        <Typography variant="b3-regular">Primary Button</Typography>
      </>
    )
  }
};
export const Secondary: Story = {
  args: {
    variant: 'Secondary',
    disabled: false,
    children: (
      <>
        <Typography variant="b3-regular">Secondary Button</Typography>
      </>
    )
  }
};
export const Tertiary: Story = {
  args: {
    variant: 'Tertiary',
    disabled: false,
    children: (
      <>
        <Typography variant="b3-regular">Tertiary Button</Typography>
      </>
    )
  }
};
export const Outlined: Story = {
  args: {
    variant: 'Outlined',
    disabled: false,
    children: (
      <>
        <Typography variant="b3-regular">Outlined Button</Typography>
      </>
    )
  }
};

export const SplitButtons: Story = {
  args: {
    variant: 'Split',
    disabled: false,
    children: (
      <>
        <Button variant="Primary" className={styles.firstButton}>
          <Typography variant="b3-regular">Split Button</Typography>
        </Button>
        <Button variant="Primary" className={styles.secondButton}>
          <ChevronDownIcon color="white" />
        </Button>
      </>
    )
  }
};

export const DestructiveButton: Story = {
  args: {
    variant: 'Primary',
    disabled: false,
    children: (
      <>
        <Typography variant="b3-regular">Destructive Button</Typography>
      </>
    ),
    className: styles.destructiveButton
  }
};

export const Tabs: Story = {
  args: {
    variant: 'Tab',
    disabled: false,
    children: (
      <>
        <Typography variant="b3-regular">Tab Button</Typography>
      </>
    ),
    isActive: false
  }
};
