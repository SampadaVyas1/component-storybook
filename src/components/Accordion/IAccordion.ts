export interface IAccordion {
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  keepMounted?: boolean;
  childrenWrapperClassName?: string;
  onAccordionClick?: () => void;
}
