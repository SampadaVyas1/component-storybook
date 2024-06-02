import { Meta, StoryObj } from '@storybook/react';
import ProgressIndicator from './ProgressIndicator';
import { IProgressIndicator } from './IProgressIndicator';
import { SVG_COLOR_GRASS } from '../../utils/svg/constant';

const componentWrapper: React.FC<IProgressIndicator> = ({
  progress,
  progressColor,
  progressBgColor,
  hideTooltip,
  tooltipPlacement,
  tooltipOnHover,
  hideText,
  textPlacement,
  tooltipProps,
  progressTextProps
}) => {
  return (
    <div style={{ width: '400px', padding: '50px' }}>
      <ProgressIndicator
        progress={progress}
        progressColor={progressColor}
        progressBgColor={progressBgColor}
        hideTooltip={hideTooltip}
        tooltipPlacement={tooltipPlacement}
        tooltipOnHover={tooltipOnHover}
        hideText={hideText}
        textPlacement={textPlacement}
        tooltipProps={tooltipProps}
        progressTextProps={progressTextProps}
      />
    </div>
  );
};

const hideTooltip = true;

const meta: Meta<typeof componentWrapper> = {
  title: 'Components/ProgressIndicator',
  component: componentWrapper,
  argTypes: {
    tooltipPlacement: {
      control: 'select',
      options: ['Top', 'Bottom']
    },
    textPlacement: {
      control: 'select',
      options: ['Right', 'Bottom']
    }
  }
};

export default meta;

type Story = StoryObj<typeof componentWrapper>;

export const Basic: Story = {
  args: {
    progress: 25,
    hideTooltip,
    tooltipPlacement: 'Top',
    hideText: true,
    textPlacement: 'Right'
  }
};

export const RightText: Story = {
  args: {
    progress: 25,
    hideTooltip,
    tooltipPlacement: 'Top',
    hideText: false,
    textPlacement: 'Right'
  }
};

export const BottomText: Story = {
  args: {
    progress: 25,
    hideTooltip,
    tooltipPlacement: 'Top',
    hideText: false,
    textPlacement: 'Bottom'
  }
};

export const TopTooltip: Story = {
  args: {
    progress: 25,
    hideTooltip: false,
    tooltipPlacement: 'Top',
    hideText: true
  }
};

export const BottomTooltip: Story = {
  args: {
    progress: 25,
    hideTooltip: false,
    tooltipPlacement: 'Bottom',
    hideText: true
  }
};

export const TooltipOnHover: Story = {
  args: {
    progress: 25,
    hideTooltip: false,
    tooltipPlacement: 'Top',
    tooltipOnHover: true,
    hideText: true
  }
};

export const CustomStyling: Story = {
  args: {
    progress: 25,
    tooltipPlacement: 'Top',
    tooltipProps: {
      container: {
        style: { backgroundColor: 'orange' }
      },
      typographyProps: {
        variant: 'h3-bold',
        style: {
          color: 'black'
        }
      }
    },
    progressTextProps: {
      variant: 'b1-bold',
      style: { color: 'magenta' }
    }
  }
};

export const CustomColorProgress: Story = {
  args: {
    progress: 50,
    hideTooltip: true,
    tooltipPlacement: 'Top',
    hideText: false,
    textPlacement: 'Right',
    progressColor: SVG_COLOR_GRASS
  }
};
