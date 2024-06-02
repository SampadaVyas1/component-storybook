import { StoryObj, Meta } from '@storybook/react';
import TableShimmer from './TableShimmer';

const meta: Meta<typeof TableShimmer> = {
  title: 'Components/TableShimmer',
  component: TableShimmer,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TableShimmer>;

export const Default: Story = {
  args: {
    rowCount: 5,
    columnCount: 5,
  },
};
