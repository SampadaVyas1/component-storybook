interface IFilterChipData {
  key: string;
  value: string;
}

export interface IFilterChipProps {
  showToolTip: boolean;
  selectedFilter: IFilterChipData[];
  screenSize?: number;
  showFilter?: boolean;
  showMoreOptions?: boolean;
  handleShowMore?: () => void;
  onRemove: (key: string, filter: string) => void;
}
