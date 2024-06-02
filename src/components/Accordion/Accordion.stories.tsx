import { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import { IAccordion } from './IAccordion';
import React, { useState } from 'react';

const AccordionWrapper: React.FC<IAccordion> = ({ title = 'Default Title', children, isOpen }) => {
  const [isAccordionOpen, setIsOpen] = useState(isOpen);

  const toggleAccordion = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };
  return (
    <Accordion title={title} isOpen={isAccordionOpen} onAccordionClick={toggleAccordion}>
      {children}
    </Accordion>
  );
};

const meta: Meta<typeof AccordionWrapper> = {
  title: 'Components/Accordion',
  component: Accordion
};

export default meta;

type Story = StoryObj<typeof AccordionWrapper>;

export const Default: Story = {
  args: {
    title: 'Accordion',
    children: 'Content',
    isOpen: false
  }
};

export const NestedAccordion: Story = {
  args: {
    title: 'Accordion',
    isOpen: false,
    children: (
      <AccordionWrapper title={'Nested Accordion'} isOpen={false}>
        Nested Accordion Content
      </AccordionWrapper>
    )
  }
};
