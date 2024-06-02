import { Meta, StoryFn } from '@storybook/react';
import React, { useEffect, useState } from 'react';

const ICON_NAMES = [
  'AccountIcon',
  'AddIcon',
  'CheckedCheckboxIcon',
  'CheckedRadioBlueIcon',
  'CheckedRadioIcon',
  'CheckIcon',
  'ChevronDownIcon',
  'ChevronLeftIcon',
  'ChevronRightIcon',
  'ChevronUpIcon',
  'CrossIcon',
  'ClockIcon',
  'DangerIcon',
  'DefaultClockIcon',
  'DefaultCrossIcon',
  'DeleteIcon',
  'DownloadIcon',
  'ErrorIcon',
  'InfoIcon',
  'SuccessIcon',
  'WarningIcon',
  'LocationIcon',
  'SearchIcon',
  'SettingIcon',
  'UncheckedCheckboxIcon',
  'UncheckedRadioIcon',
  'HamburgerIcon',
  'CloudArrowIcon',
  'CheckFilledIcon',
  'DocumentIcon',
  'FileArrowUpIcon',
  'ImageIcon',
  'VideoIcon',
  'CalendarIcon',
  'ArrowIcon',
  'CourseIcon',
  'KebabIcon',
  'CloseIcon',
  'FilterIcon',
  'RefreshIcon'
];

const Icons: React.FC = () => {
  const [iconList, setIconList] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const iconListTemp: string[] = [];
      for (let index = 0; index < ICON_NAMES.length; index++) {
        const name = ICON_NAMES[index];
        // @vite-ignore
        iconListTemp.push((await import(`./${name}`)).default);
      }
      setIconList(iconListTemp);
    })();
  }, []);

  return (
    <>
      {['transparent', '#ccc'].map((backgroundColor) => (
        <div
          style={{
            display: 'grid',
            gap: '20px 30px',
            gridTemplateColumns: 'repeat( auto-fit, minmax(150px, 1fr) )',
            padding: '50px 10px',
            backgroundColor
          }}
          key={`${backgroundColor}`}
        >
          {iconList.map((Icon, index) => (
            <div key={`icons-${index}`} style={{ textAlign: 'center' }}>
              <Icon />
              <p>{ICON_NAMES[index]}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default {
  title: 'icons/List',
  component: Icons,
  argTypes: {}
} as Meta<typeof Icons>;

const Template: StoryFn<typeof Icons> = (args) => <Icons {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
