import { StoryObj, Meta, StoryFn } from '@storybook/react';
import Dropdown from './Dropdown';
import { IDropdownOption } from './interfaces';
import styles from './Dropdown.module.scss';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'object' },
    displayOptionLimit: { control: 'number' },
    placeholder: { control: 'text' },
    value: { control: 'object' },
    showSelectAll: { control: 'boolean' }
  }
};

const options: IDropdownOption[] = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
  { id: '4', label: 'Option 4' },
  { id: '5', label: 'Option 5' },
  { id: '6', label: 'Option 6' }
];

const disabledOptions: IDropdownOption[] = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2', disabled: true },
  { id: '3', label: 'Option 3', disabled: true },
  { id: '4', label: 'Option 4' }
];

const singleSelectValues = { id: '2', label: 'Option 2' };

const multiSelectValues: IDropdownOption[] = [
  { id: '3', label: 'Option 3' },
  { id: '4', label: 'Option 4' }
];

const renderSelectedValue = (option: IDropdownOption) => {
  return <span>{option?.label}</span>;
};

const renderDropdownOption = (
  option: IDropdownOption,
  optionRef: (element: HTMLDivElement) => void,
  onOptionSelect: (option: IDropdownOption) => void
) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px'
      }}
      onClick={() => {
        onOptionSelect(option);
      }}
      role="button"
      onKeyDown={() => undefined}
      tabIndex={0}
      ref={(ref) => optionRef(ref!)}
    >
      <span>{option.label}</span>
    </div>
  );
};

type Story = StoryObj<typeof Dropdown>;

export const SingleSelect: Story = {
  args: {
    options,
    displayOptionLimit: 5
  }
};

export const MultiSelect: Story = {
  args: {
    isMulti: true,
    chipsLimit: 2,
    hasTooltip: true,
    options,
    displayOptionLimit: 5,
    showSelectAll: false
  }
};

export const SingleSelectWithSelectedValue: Story = {
  args: {
    options,
    value: singleSelectValues,
    displayOptionLimit: 5
  }
};

export const MultiSelectWithSelectedValues: Story = {
  args: {
    isMulti: true,
    options,
    value: multiSelectValues,
    displayOptionLimit: 5
  }
};

export const SingleSelectWithRenderValue: Story = {
  args: {
    isMulti: false,
    options,
    displayOptionLimit: 5,
    showSelectAll: false,
    value: { id: '1', label: 'option 1' },
    renderSelectedValue
  }
};

export const MultiSelectWithCustomRenderValue: Story = {
  args: {
    isMulti: true,
    options,
    value: multiSelectValues,
    displayOptionLimit: 5,
    showSelectAll: false,
    renderSelectedValue
  }
};

export const MultiSelectWithCustomRenderOption: Story = {
  args: {
    isMulti: true,
    options,
    displayOptionLimit: 5,
    showSelectAll: false,
    renderDropdownOption
  }
};

export const DropdownWithDisabledOption: Story = {
  args: {
    options: disabledOptions,
    displayOptionLimit: 4,
    showSelectAll: false
  }
};

export const BottomAligned: StoryFn = (args) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-end'
      }}
    >
      <Dropdown {...args} options={options} />
    </div>
  );
};

export const MultiSelectWithCustomTooltip: Story = {
  args: {
    isMulti: true,
    chipsLimit: 2,
    hasTooltip: true,
    options,
    displayOptionLimit: 5,
    showSelectAll: false,
    tooltipClassName: styles.customTooltipStyle
  }
};

export default meta;
