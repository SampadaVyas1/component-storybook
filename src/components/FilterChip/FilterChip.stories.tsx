import { StoryFn, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FilterChip from './FilterChip';
import { IFilterChipProps } from './IFilterChip';

export default {
  title: 'Components/Filter/FilterChip',
  component: FilterChip,
} as Meta<typeof FilterChip>;

const Template: StoryFn<IFilterChipProps> = (args) => <FilterChip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onRemove: action('onRemove'),
};
