import { IDropdown } from '../Dropdown/interfaces';

export interface IPagination {
  size?: 'Small' | 'Medium' | 'Large';
  alignment?: 'Left' | 'Center' | 'Right';
  totalCount: number;
  currentPage: number;
  pageSize: number;
  variant?: 'WithPageSelection' | 'WithItemPerPage' | 'Both' | 'Default';
  showFirstLastButton?: boolean;
  disabled?: boolean;
  slots?: {
    prev: React.FC<React.SVGProps<SVGSVGElement>> | string;
    next: React.FC<React.SVGProps<SVGSVGElement>> | string;
  };
  firstLastButtonSlots?: {
    first: React.FC<React.SVGProps<SVGSVGElement>> | string;
    last: React.FC<React.SVGProps<SVGSVGElement>> | string;
  };
  pageSizeOptions?: number[];
  renderPaginationItem?: (pageNumber: string, onPageChange) => React.ReactNode;
  containerProps?: JSX.IntrinsicElements['div'];
  inputProps?: Omit<JSX.IntrinsicElements['input'], 'onChange' | 'onFocus' | 'autoFocus'>;
  dropdownProps?: Omit<IDropdown, 'onChange' | 'onFocus' | 'autoFocus'>;
  paginationItemProps?: Omit<JSX.IntrinsicElements['div'], 'onClick'>;
  onPageChange: (page: number, pageSize: number) => void;
}
