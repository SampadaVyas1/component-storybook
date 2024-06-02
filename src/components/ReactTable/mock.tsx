import { ColumnDef } from '@tanstack/react-table';
import Input from 'components/Input/Input';
import { Typography } from 'components/Typography/Typography';

export const editableTableData = [
  {
    id: 0,
    name: 'John Doe',
    designation: 'Software Engineer',
    department: 'Engineering',
  },
  {
    id: 1,
    name: 'Product Manager',
    designation: 'Software Engineer',
    department: 'Product Management',
  },
  {
    id: 2,
    name: 'Alice Johnson',
    designation: 'UI/UX Designer',
    department: 'Design',
  },
];

export const EDITABLE_TABLE_COLUMNS = (register: any, errors: any): ColumnDef<any>[] => {
  const requiredColumns: any = [];

  const columns: any[] = [
    {
      backendId: 'name',
      accessorKey: 'name',
      header: 'Name',
      meta: {
        sortColumn: true,
      },
      cell: ({
        row: { original: data, index },
        column: {
          id,
          columnDef: { header },
        },
      }: any) => {
        // NOTE: To check if the input field is required field or not
        const isRequired = requiredColumns?.includes?.[id] ?? true;

        // NOTE: Render the input below with register to update the input values in the data provided.
        return (
          <>
            <Input
              defaultValue={data?.[id]}
              name={id}
              {...register(`employeeData.${index}.${id}`, {
                ...(isRequired && { required: `${header} is required.` }),
              })}
            />
            <div style={{ color: 'red' }}>{errors?.employeeData?.[index]?.[id]?.message}</div>
          </>
        );
      },
    },
    {
      backendId: 'designation',
      accessorKey: 'designation',
      header: 'Designation',
      meta: {
        sortColumn: true,
      },
      cell: ({
        row: { original: data, index },
        column: {
          id,
          columnDef: { header },
        },
      }: any) => {
        // NOTE:  Add multiple inputs in whichever cells required.
        return (
          <>
            <Input
              defaultValue={data?.[id]}
              name={id}
              {...register(`employeeData.${index}.${id}`, { required: `${header} is required.` })}
            />
            <div style={{ color: 'red' }}>{errors?.employeeData?.[index]?.[id]?.message}</div>
          </>
        );
      },
    },
    {
      backendId: 'department',
      accessorKey: 'department',
      header: 'Department',
      meta: {
        sortColumn: true,
      },
      cell: ({ row: { original: data } }: any) => {
        // NOTE:  Add multiple inputs in whichever cells required.
        return (
          <div data-tooltip-id={`department-${data?.department}-${data?.id}`}>
            <Typography variant="b3-regular">{data?.department}</Typography>
          </div>
        );
      },
    },
  ];

  return columns;
};
