import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Toggle from './Toggle';
import style from './Toggle.module.scss';
import AddIcon from '../../icons/AddIcon';
import DeleteIcon from '../../icons/DeleteIcon';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    defaultChecked: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    toggleSize: {
      control: 'select',
      options: ['Small', 'Large']
    },
    renderThumb: action('renderThumb'),
    renderTrack: action('renderTrack'),
    onChange: action('onChange')
  }
} as Meta<typeof Toggle>;

const defaultThumb = (isSelected) => {
  return (
    <div className={[style.defaultThumb, isSelected ? style.checkedThumb : ''].join(' ')}></div>
  );
};

const renderThumb = (isSelected) => {
  return (
    <div className={[style.renderedThumb, isSelected ? style.checkedThumb : ''].join(' ')}></div>
  );
};

const renderTrack = (isSelected: boolean) => {
  return (
    <div className={[style.renderedTrack, isSelected ? style.checkedTrack : ''].join('')}></div>
  );
};

const renderTextTrack = (isSelected: boolean) => {
  return (
    <div className={[style.renderedTrack, isSelected ? style.checkedTrack : ''].join('')}>
      <span className={style.checkedText}>Yes</span>
      <span className={style.uncheckedText}>No</span>
    </div>
  );
};

const renderTrackWithIcons = (isSelected: boolean) => {
  return (
    <div className={[style.renderedTrack, isSelected ? style.checkedTrack : ''].join('')}>
      <AddIcon style={{ width: '18px', height: '10px' }} />
      <DeleteIcon style={{ width: '18px', height: '10px' }} />
    </div>
  );
};

export const Default: StoryFn<typeof Toggle> = (args) => <Toggle {...args} />;
Default.args = {
  defaultChecked: true,
  disabled: false,
  toggleSize: 'Small'
};

export const attachThumbAndTrack: StoryFn<typeof Toggle> = (args) => <Toggle {...args} />;
attachThumbAndTrack.args = {
  defaultChecked: false,
  disabled: false,
  renderThumb,
  renderTrack
};

export const renderTextInTrack: StoryFn<typeof Toggle> = (args) => <Toggle {...args} />;
renderTextInTrack.args = {
  defaultChecked: false,
  disabled: false,
  renderThumb,
  renderTrack: renderTextTrack
};

export const renderIconsInTrack: StoryFn<typeof Toggle> = (args) => <Toggle {...args} />;
renderIconsInTrack.args = {
  disabled: false,
  renderThumb: defaultThumb,
  renderTrack: renderTrackWithIcons
};
