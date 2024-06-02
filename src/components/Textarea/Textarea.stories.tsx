import { Meta, StoryFn } from '@storybook/react';
import Textarea from './Textarea';

export default {
  title: 'Components/TextArea',
  component: Textarea,
  argTypes: {}
} as Meta<typeof Textarea>;

export const Default: StoryFn<typeof Textarea> = (args) => <Textarea {...args} />;
Default.args = {
  error: false,
  resize: false,
  rows: 5,
  cols: 40
};
