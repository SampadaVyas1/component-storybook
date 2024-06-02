import { Meta, StoryFn } from '@storybook/react';
import Filter from './Filter';
import KebabIcon from '../../icons/KebabIcon';
import { IFilter } from './IFilter';
import { useState } from 'react';

export default {
  title: 'Components/Filter',
  component: Filter
} as Meta<typeof Filter>;

const navOptions = [
  { id: 1, title: 'Dashboard' },
  { id: 2, title: 'Roles' },
  { id: 3, title: 'Department' }
];

const filterOptions = [
  { id: 4, title: 'web development' },
  { id: 5, title: 'angular' },
  { id: 6, title: 'react' }
];

export const DefaultFilter: StoryFn<typeof Filter> = (args: IFilter) => {
  const [updatedFilterOptions, setUpdatedFilterOptions] = useState(filterOptions);
  const [activeId, setActiveId] = useState<string | number>(navOptions[2].id);

  const handleSearch = (searchText: string) => {
    const updatedFilters = searchText.length
      ? filterOptions.filter((option) =>
          option.title.toLowerCase().includes(searchText.toLowerCase())
        )
      : filterOptions;

    setUpdatedFilterOptions(updatedFilters);
  };

  return (
    <Filter
      {...args}
      selectedNavOptionId={activeId}
      filterOptions={updatedFilterOptions}
      onSearch={handleSearch}
      onNavOptionChange={(id) => setActiveId(id)}
    />
  );
};

DefaultFilter.args = {
  navOptions
};

export const filterWithSelectedValues: StoryFn<typeof Filter> = (args: IFilter) => {
  const [updatedFilterOptions, setUpdatedFilterOptions] = useState(filterOptions);
  const [activeId, setActiveId] = useState<string | number>(navOptions[2].id);

  const handleSearch = (searchText: string) => {
    const updatedFilters = searchText.length
      ? filterOptions.filter((option) =>
          option.title.toLowerCase().includes(searchText.toLowerCase())
        )
      : filterOptions;

    setUpdatedFilterOptions(updatedFilters);
  };

  return (
    <Filter
      {...args}
      selectedNavOptionId={activeId}
      filterOptions={updatedFilterOptions}
      onSearch={handleSearch}
      renderBadgeContent={() => <span>7</span>}
      onNavOptionChange={(id) => setActiveId(id)}
    />
  );
};

filterWithSelectedValues.args = {
  navOptions,
  values: [
    { id: 4, title: 'web development' },
    { id: 5, title: 'angular' }
  ]
};

export const filterWithTriggerElement: StoryFn<typeof Filter> = (args: IFilter) => {
  const [updatedFilterOptions, setUpdatedFilterOptions] = useState(filterOptions);
  const [activeId, setActiveId] = useState<string | number>(navOptions[2].id);

  const handleSearch = (searchText: string) => {
    const updatedFilters = searchText.length
      ? filterOptions.filter((option) =>
          option.title.toLowerCase().includes(searchText.toLowerCase())
        )
      : filterOptions;

    setUpdatedFilterOptions(updatedFilters);
  };

  return (
    <Filter
      {...args}
      selectedNavOptionId={activeId}
      filterOptions={updatedFilterOptions}
      onSearch={handleSearch}
      onNavOptionChange={(id) => setActiveId(id)}
    />
  );
};

filterWithTriggerElement.args = {
  navOptions,
  TriggerElement: <KebabIcon />
};
