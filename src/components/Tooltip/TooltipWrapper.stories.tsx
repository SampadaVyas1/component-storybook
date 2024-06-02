import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TooltipWrapper from './TooltipWrapper';
import { Typography } from '../Typography/Typography';

const ButtonTooltip: React.FC = (props) => {
  return (
    <>
      <div
        style={{
          width: 'calc(100vw - 32px)',
          height: 'calc(100vh - 32px)',
          backgroundColor: '#e0e0e0',
          padding: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <TooltipWrapper anchorElement=".hover-element" {...props} />
        <div
          style={{
            width: '150px',
            height: '150px',
            border: '4px dashed #888888',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            textAlign: 'center'
          }}
          className="hover-element"
        >
          <Typography variant="h2-light">Hover me</Typography>
        </div>
      </div>
    </>
  );
};

const meta: Meta<typeof ButtonTooltip> = {
  title: 'Components/Tooltip',
  component: ButtonTooltip,
  argTypes: {
    place: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end'
      ]
    }
  },
  args: {
    noArrow: false,
    clickable: false,
    opacity: '0.9',
    offset: '10',
    delayShow: '250',
    delayHide: '250'
  }
};

export default meta;

type Story = StoryObj<typeof ButtonTooltip>;

export const SingleLine: Story = {
  args: {
    place: 'right',
    children: <Typography variant="b3-regular">This is a long sentence</Typography>
  }
};

export const MultiLine: Story = {
  args: {
    place: 'right',
    children: (
      <>
        <Typography variant="b3-regular">First line</Typography>
        <Typography variant="b3-regular">Second line</Typography>
        <Typography variant="b3-regular">Third line</Typography>
      </>
    )
  }
};

export const CustomStyle: Story = {
  args: {
    style: {
      background:
        'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(230,193,117,1) 100%)',
      color: '#000000',
      borderRadius: '20px',
      padding: '16px',
      boxShadow: '0px 8px 8px 2px rgba(16, 24, 40, 0.05), 0px 8px 8px 2px rgba(16, 24, 40, 0.2)'
    },
    arrowColor: 'black',
    place: 'right',
    children: (
      <>
        <Typography variant="b3-regular">First line</Typography>
        <Typography variant="b3-regular">Second line</Typography>
        <Typography variant="b3-regular">Third line</Typography>
      </>
    )
  }
};
