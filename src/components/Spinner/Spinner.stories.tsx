import { StoryFn, Meta } from '@storybook/react';

import { Spinner } from './Spinner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Spinner',
  component: Spinner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Spinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Spinner> = (args) => (
  <div style={{ background: 'gray', padding: '1rem' }}>
    <Spinner {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  size: 'S',
  color: 'Grey',
};
