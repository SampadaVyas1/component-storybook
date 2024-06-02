import { Meta, StoryFn, StoryObj } from '@storybook/react';
import Slider from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    display: {
      control: 'select',
      options: ['Top', 'Bottom']
    }
  }
};

export default meta;

type Story = StoryObj<typeof Slider>;

const onChange = (value) => {
  console.log(value);
};

export const BasicSlider: StoryFn<typeof Slider> = (args) => {
  return (
    <div
      style={{
        height: '100px',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end'
      }}
    >
      <Slider {...args} />
    </div>
  );
};
BasicSlider.args = {
  min: 0,
  max: 100,
  display: 'Top',
  onChange
};

export const OptionSlider: StoryFn<typeof Slider> = (args) => {
  return (
    <div>
      <Slider {...args} />
    </div>
  );
};

OptionSlider.args = {
  min: -100,
  max: 100,
  isOptionSlider: true,
  display: 'Bottom',
  onChange
};

export const RangeSlider: StoryFn<typeof Slider> = (args) => {
  return (
    <div style={{ height: '200px', width: '100%', display: 'flex', alignItems: 'center' }}>
      <Slider {...args} />
    </div>
  );
};

RangeSlider.args = {
  min: -100,
  max: 100,
  isRangeSlider: true,
  display: 'Bottom',
  onChange
};

export const WithPrefixAndSufix: Story = {
  args: {
    min: 0,
    max: 100,
    onChange
  }
};
export const Disabled: Story = {
  args: {
    min: 0,
    max: 100,
    disabled: true
  }
};
