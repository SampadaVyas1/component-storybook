import { Meta, StoryFn } from '@storybook/react';
import Input from './Input';
import SearchIcon from '../../icons/SearchIcon';
import CrossIcon from '../../icons/CrossIcon';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {}
} as Meta<typeof Input>;

export const Default: StoryFn<typeof Input> = (args) => <Input {...args} />;
Default.args = {
  error: false,
  placeholder: 'This is Input',
  disabled: false,
  type: 'text'
};

export const InputWithIcon: StoryFn<typeof Input> = (args) => <Input {...args} />;
InputWithIcon.args = {
  error: false,
  placeholder: 'This is Input',
  startAdornment: <SearchIcon />,
  endAdornment: <CrossIcon />,
  disabled: false,
  type: 'text'
};

export const NumberInput: StoryFn<typeof Input> = (args) => <Input {...args} />;
NumberInput.args = {
  error: false,
  placeholder: 'This is Input',
  startAdornment: <div style={{ borderRight: '1px solid black', paddingRight: '8px' }}>+91</div>,
  type: 'number',
  disabled: false
};
