import { ReactNode } from 'react';
// import { IPagination } from '@coditashq/react-ada-components';
import { ColumnDef, RowSelectionState, SortingState } from '@tanstack/react-table';

export interface ITableProps {
  data: any[];
  columns: ColumnDef<any>[];
  pagination?: boolean;
  virtualization?: boolean;
  rowClassName?: string;
  headerClassName?: string;
  activeRowId?: string | number;
  enableRowSelection?: boolean;
  emptyText?: ReactNode;
  enableMultiRowSelection?: boolean;
  enableSorting?: boolean;
  sortingState?: SortingState;
  onRowClick?: (row: any) => void;
  onSortingChange?: (sorting: SortingState) => void;
  className?: string;
  isLoading?: boolean;
  rowSelectionId?: string;
  onRowSelectionChange?: (selectionData: any) => void;
  // paginationProps?: IPagination;
  paginationCountText?: string;
  customSortButtonColor?: string;
  showScroll: boolean;
  isRowSelectable?: boolean;
  rowSelection?: RowSelectionState;
  handleSelectedRow: (data: any) => void;
  setRowId?: (row: any) => any;
  getHoveredRowId?: (rowIndex: number | null) => void;
}

export interface ISelectionData {
  rowDataModel: any[];
  selectedRowIds: string[];
}
