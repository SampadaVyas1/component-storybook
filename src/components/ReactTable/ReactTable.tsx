import React, { CSSProperties, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { flexRender, getCoreRowModel, useReactTable, RowData, SortingState, ColumnDef } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import styles from './ReactTable.module.scss';
import { ITableProps } from './interfaces';
import appendClasses from 'utils/appendClasses';
import Checkbox from 'components/Checkbox/Checkbox';
import { Typography } from 'components/Typography/Typography';
import TableShimmer from 'components/TableShimmer/TableShimmer';
import DownArrow from 'icons/DownArrow';
import { SVG_GREY_700 } from 'constants/svg/constant';
// import Pagination from 'components/Pagination/Pagination';

declare module '@tanstack/table-core' {
  interface ColumnMeta<TData extends RowData, TValue> {
    sortColumn?: boolean;
    headerStyle?: CSSProperties;
    rowDataStyle?: CSSProperties;
  }
}

const ReactTable: React.FC<ITableProps> = ({
  data,
  columns,
  pagination = false,
  enableRowSelection = false,
  enableMultiRowSelection = false,
  enableSorting = false,
  virtualization = false,
  // paginationProps,
  rowClassName,
  activeRowId,
  className,
  customSortButtonColor,
  headerClassName,
  isLoading,
  rowSelection = {},
  handleSelectedRow,
  emptyText,
  rowSelectionId,
  sortingState,
  paginationCountText,
  onRowClick,
  onSortingChange,
  onRowSelectionChange,
  showScroll,
  setRowId = (row) => row.uuid,
  getHoveredRowId = (rowIndex) => rowIndex,
  ...restConfig
}) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const tableHeadRef = useRef<HTMLTableSectionElement>(null);
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const [rowHoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    getHoveredRowId(rowHoveredIndex);
  }, [rowHoveredIndex]);

  const modifiedColumns = useMemo<ColumnDef<any>[]>(() => {
    if (enableRowSelection) {
      return [
        {
          id: 'select',
          header: ({ table }) => (
            <Checkbox
              className={styles.checkbox}
              checked={table.getIsAllRowsSelected()}
              intermediate={table.getIsSomeRowsSelected()}
              disabled={!enableMultiRowSelection}
              onChange={table.getToggleAllRowsSelectedHandler()}
              onClick={handleCheckboxClick}
            />
          ),
          cell: ({ row }) => (
            <Checkbox
              className={styles.checkbox}
              checked={row.getIsSelected()}
              disabled={!row.getCanSelect()}
              intermediate={row.getIsSomeSelected()}
              onChange={row.getToggleSelectedHandler()}
              onClick={handleCheckboxClick}
            />
          ),
          meta: {
            headerStyle: {
              width: '2rem',
            },
          },
        },
        ...columns,
      ];
    }
    return columns;
  }, [columns, data]);

  const table = useReactTable({
    data,
    columns: modifiedColumns,
    state: {
      rowSelection,
      sorting,
    },
    enableSorting,
    enableRowSelection,
    enableMultiRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: (updater: any) => {
      const updatedState = updater(rowSelection);
      handleSelectedRow(updatedState);
    },
    getRowId: (row) => setRowId(row),
    onSortingChange: (updateSorting: any) => {
      const sortingState = updateSorting(sorting);
      setSorting(sortingState);
      onSortingChange?.(sortingState);
    },
    ...restConfig,
  });

  useEffect(() => {
    if (!data?.length) {
      handleSelectedRow({});
    }
  }, [data]);

  useEffect(() => {
    if (rowSelection) {
      handleSelectedRow?.(rowSelection);
    }
    const rowDataModel = table?.getSelectedRowModel()?.flatRows?.map(({ original }) => original) || [];
    onRowSelectionChange?.({ rowDataModel });
  }, [rowSelection]);

  useEffect(() => {
    if (sortingState) {
      setSorting(sortingState);
    }
  }, [sortingState]);

  useLayoutEffect(() => {
    if (tableContainerRef.current) {
      tableContainerRef.current?.scrollTo({
        top: 0,
      });
    }
  }, [data]);

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    getScrollElement: () => tableContainerRef?.current,
    count: rows.length,
    estimateSize: () => 80,
    overscan: 5,
  });
  const { getVirtualItems } = rowVirtualizer;

  const virtualRows = getVirtualItems();

  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows.length > 0 ? virtualRows?.length - (virtualRows?.[virtualRows?.length - 1]?.end || 0) : 0;

  const handleRowClick = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: any) => {
    event.stopPropagation();
    onRowClick?.(row);
  };

  const getArrow = (isSorted?: 'asc' | 'desc' | false) => (
    <div className={styles.sortIcon}>
      <DownArrow
        className={styles.downIcon}
        color={customSortButtonColor || SVG_GREY_700}
        {...(isSorted === 'asc' && { style: { opacity: 0.3 } })}
      />
    </div>
  );

  const renderArrow = (isSorted: 'asc' | 'desc' | false) => {
    const arrows = {
      asc: getArrow(isSorted),
      desc: getArrow(isSorted),
    };
    return isSorted ? arrows[isSorted] : null;
  };

  const handleCheckboxClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        ref={tableContainerRef}
        className={appendClasses(styles.tableContainer, showScroll && styles.showScroll, className)}
      >
        <table className={styles.table}>
          <thead className={styles.tableHead} ref={tableHeadRef}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={`thead-${headerGroup.id}`} className={styles.tableRow}>
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.columnDef.meta?.sortColumn;
                  return (
                    <th
                      key={`th-${header.id}`}
                      colSpan={header.colSpan}
                      style={header.column.columnDef?.meta?.headerStyle}
                      className={appendClasses(styles.th, headerClassName)}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: appendClasses(styles.columnHeader, canSort ?? styles.sortTable),
                          }}
                        >
                          <Typography variant="b2-regular" color="red">
                            {flexRender(header.column.columnDef.header, header.getContext())}
                          </Typography>

                          <span>
                            {canSort && (
                              <div
                                className={styles.showIcon}
                                onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                              >
                                {renderArrow(header.column.getIsSorted())}

                                {!header.column.getIsSorted() && <div className={styles.arrowIcon}>{getArrow()}</div>}
                              </div>
                            )}
                          </span>
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody
            className={styles.tableBody}
            style={{
              maxHeight: `calc(100% - ${tableHeadRef?.current?.clientHeight}px)`,
            }}
          >
            {virtualization && paddingTop > 0 && (
              <tr className={styles.tableRow}>
                <td className={styles.td} style={{ height: `${paddingTop}px` }} />
              </tr>
            )}
            {isLoading ? (
              <tr>
                <td colSpan={modifiedColumns?.length}>
                  <div className={styles.loadingWrapper}>
                    <TableShimmer />
                  </div>
                </td>
              </tr>
            ) : (
              (virtualization ? virtualRows : table.getRowModel().rows).map((data: any, index: number) => {
                const row = virtualization ? rows[data?.index] : data;
                return (
                  <tr
                    key={row.id}
                    onClick={(event) => handleRowClick(event, row.original)}
                    className={appendClasses(
                      styles.tableRow,
                      rowClassName,
                      activeRowId === (row?.original?.[rowSelectionId || ''] || index) && styles.highlightRow,
                      row.id % 2 !== 0 && styles.oddRow,
                    )}
                    style={{ ...(onRowClick && { cursor: 'pointer' }) }}
                    onMouseEnter={() => setHoveredIndex(data?.index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {row.getVisibleCells().map((cell: any) => {
                      return (
                        <td
                          key={`td-${cell.id}`}
                          className={styles.td}
                          style={cell.column.columnDef?.meta?.rowDataStyle}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
            {virtualization && paddingBottom > 0 && (
              <tr className={styles.tableRow}>
                <td className={styles.td} style={{ height: `${paddingBottom}px` }} />
              </tr>
            )}
            {!(data.length || isLoading) && (
              <tr className={appendClasses(styles.tableRow, styles.emptyRow)}>
                <td className={styles.emptyMessage} colSpan={modifiedColumns.length}>
                  {emptyText || <> No Data Found </>}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {pagination && data?.length > 0 && (
        <div className={styles.pagination}>
          <Typography variant="b3-regular" className={styles.totalCount}>
            {/* {paginationCountText}: {paginationProps?.totalCount} */}
          </Typography>
          {/* <Pagination {...paginationProps} paginationItemProps={{ className: styles.sizes }} /> */}
        </div>
      )}
    </>
  );
};

export default ReactTable;
