import { Meta, StoryObj } from '@storybook/react';
import Table from './ReactTable';
import { ITableProps } from './interfaces';
import { useForm } from 'react-hook-form';

import { EDITABLE_TABLE_COLUMNS, editableTableData } from './mock';
import { Button } from 'components/Button/Button';

const meta: Meta = {
  title: 'Components/ReactTable',
  component: Table,
};

export default meta;

const EditableFormTable = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: { editableTableData },
  });

  const handleFormSubmit = () => {};

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Table
        data={getValues().editableTableData ?? []} // NOTE: Pass the data with getValues function.
        columns={EDITABLE_TABLE_COLUMNS(
          register, // NOTE: Pass on the register & errors for the input.
          errors,
        )}
        className={''}
        showScroll={false}
        handleSelectedRow={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Button type="submit" variant="Primary" style={{ position: 'absolute', top: '350px', left: '700px' }}>
        Submit
      </Button>
    </form>
  );
};

export const Primary: StoryObj<ITableProps> = {
  args: {
    data: [
      {
        name: 'Iron Man',
        characterName: 'Tony Stark',
      },
      {
        name: 'Captain America',
        characterName: 'Steve Rogers',
      },
    ],
    columns: [
      { header: 'Name', accessorKey: 'name' },
      {
        header: 'Character Name',
        accessorKey: 'characterName',
      },
    ],
  },
};

export const EditableTable: StoryObj<ITableProps> = {
  render: EditableFormTable,
};
