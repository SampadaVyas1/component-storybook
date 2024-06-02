import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';
import Modal from './Modal';
import SuccessIcon from '../../icons/SuccessIcon';
import { Typography } from '../Typography/Typography';
import { Button } from '../Button/Button';

const LOREM_IPSUM_TEXT = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
earum, possimus esse fuga corporis consequuntur iusto tempore illo, quam
at delectus repellat aliquam deleniti fugit porro dolorem id sed dolore
sequi itaque! Officia molestiae modi ad, velit voluptates quos? Ullam
necessitatibus voluptates labore ex quia, eaque minus ipsum minima
adipisci.`;

const headerTemplate: ReactNode = (
  <div style={{ display: 'flex', columnGap: '16px', alignItems: 'center' }}>
    <SuccessIcon />
    <Typography variant="h5-bold">Title</Typography>
  </div>
);

const bodyTemplate: ReactNode = (
  <>
    <div
      style={{
        display: 'flex',
        columnGap: '16px',
        overflowY: 'auto',
        marginRight: '-16px',
        scrollbarGutter: 'stable'
      }}
      role="textbox"
      aria-label="modal-content"
      tabIndex={0}
    >
      <Typography variant="b2-regular">
        {LOREM_IPSUM_TEXT}
        {LOREM_IPSUM_TEXT}
        {LOREM_IPSUM_TEXT}
      </Typography>
    </div>

    <div style={{ display: 'flex', columnGap: '16px', justifyContent: 'flex-end' }}>
      <Button variant="Secondary">
        <Typography variant="b3-bold">Cancel</Typography>
      </Button>

      <Button variant="Primary">
        <Typography variant="b3-bold">Submit</Typography>
      </Button>
    </div>
  </>
);

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  args: {
    onClose: action('onClose')
  }
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    open: true,
    hideCloseButton: false,
    keepMounted: true,
    disableBackdropClose: true,
    style: {
      maxWidth: '600px',
      maxHeight: '400px'
    },
    header: headerTemplate,
    children: bodyTemplate,
    onClose: action('Modal closed')
  }
};

export const DisablePortal: Story = {
  args: {
    open: true,
    hideCloseButton: false,
    keepMounted: true,
    disablePortal: true,
    style: {
      maxWidth: '400px'
    },
    header: headerTemplate,
    children: bodyTemplate
  }
};

export const CustomBackdropStyle: Story = {
  args: {
    open: true,
    hideCloseButton: false,
    keepMounted: true,
    style: {
      maxWidth: '600px',
      maxHeight: '400px'
    },
    backdropStyles: {
      backgroundColor: 'rgba(44, 155, 230)'
    },
    header: headerTemplate,
    children: bodyTemplate,
    onClose: action('Modal closed')
  }
};
