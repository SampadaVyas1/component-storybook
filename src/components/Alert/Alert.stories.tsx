import { StoryObj, Meta } from '@storybook/react';
import { Alert } from './Alert';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../Button/Button';
import {
  SVG_COLOR_GREEN,
  SVG_COLOR_NAVY,
  SVG_COLOR_ORANGE,
  SVG_ERROR
} from '../../utils/svg/constant';
import { actions } from '@storybook/addon-actions';
import InfoIcon from '../../icons/InfoIcon';
import SuccessIcon from '../../icons/SuccessIcon';
import ErrorIcon from '../../icons/ErrorIcon';
import WarningIcon from '../../icons/WarningIcon';
import style from './Alert.module.scss';

const titleTemplate = <Typography variant="b2-medium">This is Title</Typography>;

const contentTemplate = (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Typography variant="b3-regular">This is multi lined Description.</Typography>
    <Typography variant="b3-regular">This is multi lined Description.</Typography>
  </div>
);

const actionsTemplate = (
  <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: '6px' }}>
    <Button
      variant={'Tertiary'}
      style={{
        backgroundColor: 'transparent',
        color: SVG_COLOR_NAVY,
        paddingLeft: '8px',
        paddingRight: '8px'
      }}
    >
      <Typography variant="b3-bold">CANCEL</Typography>
    </Button>
    <Button
      variant={'Tertiary'}
      style={{
        backgroundColor: 'transparent',
        color: SVG_COLOR_NAVY,
        paddingLeft: '8px',
        paddingRight: '8px'
      }}
    >
      <Typography variant="b3-bold">SAVE</Typography>
    </Button>
  </div>
);

const infoIcon = <InfoIcon color={SVG_COLOR_NAVY} />;

const successIcon = <SuccessIcon color={SVG_COLOR_GREEN} />;

const errorIcon = <ErrorIcon color={SVG_ERROR} />;

const warningIcon = <WarningIcon color={SVG_COLOR_ORANGE} />;

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: 'select'
    },
    layout: {
      control: 'select'
    },
    position: {
      control: 'select'
    },
    onClose: actions('onCLose')
  }
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: 'Default',
    title: titleTemplate,
    content: contentTemplate,
    actions: actionsTemplate,
    alertIcon: infoIcon
  }
};

export const Success: Story = {
  args: {
    variant: 'Success',
    title: titleTemplate,
    content: contentTemplate,
    actions: actionsTemplate,
    alertIcon: successIcon
  }
};

export const Error: Story = {
  args: {
    variant: 'Error',
    title: titleTemplate,
    content: contentTemplate,
    actions: actionsTemplate,
    alertIcon: errorIcon
  }
};

export const Warning: Story = {
  args: {
    variant: 'Warning',
    title: titleTemplate,
    content: contentTemplate,
    actions: actionsTemplate,
    alertIcon: warningIcon
  }
};

export const FixedLayout: Story = {
  args: {
    variant: 'Success',
    layout: 'Fixed',
    position: 'TopRight',
    title: titleTemplate,
    content: contentTemplate,
    actions: actionsTemplate,
    alertIcon: successIcon
  }
};

export const NoAlertIcon: Story = {
  args: {
    variant: 'Default',
    hideAlertIcon: true,
    title: titleTemplate,
    content: contentTemplate,
    actions: actionsTemplate,
    alertIcon: infoIcon
  }
};

export const NoCloseButton: Story = {
  args: {
    variant: 'Default',
    hideCloseButton: true,
    title: titleTemplate,
    content: contentTemplate,
    actions: actionsTemplate,
    alertIcon: infoIcon
  }
};

export const NoActions: Story = {
  args: {
    variant: 'Default',
    title: titleTemplate,
    content: contentTemplate,
    alertIcon: infoIcon
  }
};

export const OnlyContent: Story = {
  args: {
    variant: 'Default',
    hideCloseButton: true,
    content: contentTemplate
  }
};

export const OnlyTitle: Story = {
  args: {
    variant: 'Default',
    hideCloseButton: true,
    title: titleTemplate
  }
};

export const CustomStyling: Story = {
  args: {
    variant: 'Default',
    title: titleTemplate,
    className: style.customAlert
  }
};
