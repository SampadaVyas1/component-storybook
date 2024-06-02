import { useMemo } from 'react';

export const usePagination = ({
  totalCount,
  selectedPageSize,
  activePage,
}: {
  totalCount: number;
  selectedPageSize: number;
  activePage: number;
}) => {
  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const siblingCount = 1;

  const paginationRange = useMemo(() => {
    if (totalCount <= selectedPageSize) {
      return [1];
    }
    const totalPageCount = Math.ceil(totalCount / selectedPageSize);
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(activePage - siblingCount, 1);
    const rightSiblingIndex = Math.min(activePage + siblingCount, totalPageCount);
    const shouldShowLeftDots = leftSiblingIndex >= 4;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, 'DOTS', totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, 'DOTS', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, 'DOTS', ...middleRange, 'DOTS', lastPageIndex];
    }

    if (!shouldShowLeftDots && !shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex - 1, rightSiblingIndex + 1);
      return [1, ...middleRange, totalPageCount];
    }
  }, [totalCount, selectedPageSize, siblingCount, activePage]);

  return paginationRange;
};
