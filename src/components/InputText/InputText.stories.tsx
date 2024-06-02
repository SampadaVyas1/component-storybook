import { StoryFn, Meta } from '@storybook/react';
import { InputText } from './InputText';

export default {
  title: 'components/InputText',
  component: InputText,
  argTypes: {},
} as Meta<typeof InputText>;

const Template: StoryFn<typeof InputText> = (args) => <InputText {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  SVGIcon: '',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: 'This is disabled',
};
