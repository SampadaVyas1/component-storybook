import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';
import ChevronRightIcon from '../../icons/ChevronRightIcon';
import ChevronLeftIcon from '../../icons/ChevronLeftIcon';
import style from './Pagination.module.scss';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    onPageChange: action('onPageChange')
  }
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    size: 'Small',
    totalCount: 100,
    pageSize: 10,
    currentPage: 1,
    onPageChange: action('onPageChange'),
    alignment: 'Left',
    variant: 'WithPageSelection',
    showFirstLastButton: true,
    disabled: false,
    pageSizeOptions: [5, 10, 15]
  }
};

export const WithDifferentProps: Story = {
  args: {
    size: 'Small',
    totalCount: 50,
    pageSize: 5,
    currentPage: 3,
    onPageChange: action('onPageChange'),
    alignment: 'Left',
    showFirstLastButton: true,
    disabled: false,
    slots: { prev: 'prev', next: 'next' },
    firstLastButtonSlots: { first: ChevronLeftIcon, last: ChevronRightIcon },
    containerProps: {
      className: style.customPaginationStyle
    }
  }
};
