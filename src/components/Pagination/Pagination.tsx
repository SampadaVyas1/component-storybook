import React, { useEffect, useMemo, useState } from 'react';
import { IPagination } from './IPagination';
import style from './Pagination.module.scss';
import { usePagination } from './utils/usePagination';
import ChevronLeftIcon from '../../icons/ChevronLeftIcon';
import ChevronRightIcon from '../../icons/ChevronRightIcon';
import { Typography } from '../Typography/Typography';
import Dropdown from '../Dropdown/Dropdown';
import { SCREEN_SIZES } from '../../constants/screenSize';
import { IDropdownOption } from '../Dropdown/interfaces';

const Pagination: React.FC<IPagination> = ({
  size = 'Small',
  alignment = 'Right',
  totalCount,
  pageSize,
  currentPage = 1,
  onPageChange,
  variant = 'default',
  showFirstLastButton = false,
  disabled = false,
  slots = { prev: ChevronLeftIcon, next: ChevronRightIcon },
  firstLastButtonSlots = { first: 'first', last: 'last' },
  pageSizeOptions = [25, 50, 100],
  renderPaginationItem,
  containerProps,
  inputProps,
  dropdownProps,
  paginationItemProps
}) => {
  const [activePage, setActivePage] = useState<number>(currentPage);
  const [selectedPageSize, setSelectedPage] = useState<number>(pageSize);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const sizeOptions: IDropdownOption[] = pageSizeOptions.map((option) => {
    return { id: option, label: `${option} / page` };
  });

  const { className: containerClass, ...restContainerProps } = containerProps || {};
  const { className: inputClass, ...restInputProps } = inputProps || {};
  const { containerProps: dropdownContainerProps } = dropdownProps || {};
  const { className: dropdownContainerClass } = dropdownContainerProps || {};
  const { className: pageItemClass, ...restPageItemProps } = paginationItemProps || {};

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useMemo(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  useMemo(() => {
    setSelectedPage(pageSize);
  }, [pageSize]);

  const onNext = () => {
    handlePageChange(`${activePage + 1}`);
  };

  const onPrev = () => {
    handlePageChange(`${activePage - 1} `);
  };

  const handlePageChange = (page: string) => {
    setActivePage(+page);
    onPageChange(+page, selectedPageSize);
  };

  const paginationRange =
    usePagination({
      totalCount,
      selectedPageSize,
      activePage
    }) || [];

  if (currentPage === 0) {
    return null;
  }

  const handlePageSizeSelect = (option) => {
    setActivePage(1);
    currentPage = +1;
    setSelectedPage(+option?.id);
    onPageChange?.(1, +option?.id);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  const paginationItemClass = [
    style.paginationItem,
    style[size.toLowerCase()],
    style.buttonContainer,
    pageItemClass,
    activePage == 1 ? style.disabled : ''
  ].join(' ');

  const pagination = (
    <div className={style.paginationWrapper}>
      <div
        onClick={onPrev}
        className={paginationItemClass}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.code === 'Enter' || event.code === 'Space') {
            onPrev();
          }
        }}
        {...restPageItemProps}
      >
        {typeof slots.prev === 'string' ? <span>{slots.prev}</span> : <slots.prev />}
      </div>
      {showFirstLastButton && (
        <div
          className={paginationItemClass}
          onClick={() => handlePageChange('1')}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.code === 'Enter' || event.code === 'Space') {
              handlePageChange('1');
            }
          }}
          {...restPageItemProps}
        >
          {typeof firstLastButtonSlots.first === 'string' ? (
            <span>{firstLastButtonSlots.first}</span>
          ) : (
            <firstLastButtonSlots.first />
          )}
        </div>
      )}
      {screenSize >= SCREEN_SIZES.MOBILE ? (
        paginationRange.map((pageNumber, index) => {
          if (pageNumber === 'DOTS') {
            return !renderPaginationItem ? (
              <div
                key={`dot-${index}`}
                className={[
                  style.paginationItem,
                  style.dots,
                  style[size.toLowerCase()],
                  pageItemClass
                ].join(' ')}
                {...restPageItemProps}
              >
                <Typography variant="b2-regular">...</Typography>
              </div>
            ) : (
              renderPaginationItem(pageNumber, onPageChange)
            );
          } else {
            return !renderPaginationItem ? (
              <div
                className={[
                  style.paginationItem,
                  pageNumber === activePage ? style.selected : '',
                  style[size.toLowerCase()],
                  pageItemClass
                ].join(' ')}
                key={`key-${pageNumber}`}
                role="button"
                tabIndex={0}
                onClick={() => handlePageChange(pageNumber)}
                onKeyDown={(event) => {
                  if (event.code === 'Enter' || event.code === 'Space') {
                    handlePageChange(pageNumber);
                  }
                }}
                {...restPageItemProps}
              >
                <Typography variant={pageNumber === activePage ? 'b3-medium' : 'b3-regular'}>
                  {pageNumber}
                </Typography>
              </div>
            ) : (
              renderPaginationItem(pageNumber, onPageChange)
            );
          }
        })
      ) : (
        <div>
          <Typography variant="b3-regular">
            Page {activePage} of {lastPage}
          </Typography>
        </div>
      )}
      {showFirstLastButton && (
        <div
          className={[
            style.paginationItem,
            style[size.toLowerCase()],
            style.buttonContainer,
            pageItemClass,
            activePage == lastPage ? style.disabled : ''
          ].join(' ')}
          onClick={() => handlePageChange(lastPage)}
          tabIndex={0}
          role="button"
          onKeyDown={(event) => {
            if (event.code === 'Enter' || event.code === 'Space') {
              handlePageChange(lastPage);
            }
          }}
          {...restPageItemProps}
        >
          {typeof firstLastButtonSlots.last === 'string' ? (
            <span>{firstLastButtonSlots.last}</span>
          ) : (
            <firstLastButtonSlots.last />
          )}
        </div>
      )}
      <div
        onClick={onNext}
        className={[
          style.paginationItem,
          style[size.toLowerCase()],
          style.buttonContainer,
          pageItemClass,
          activePage == lastPage ? style.disabled : ''
        ].join(' ')}
        tabIndex={0}
        role="button"
        onKeyDown={(event) => {
          if (event.code === 'Enter' || event.code === 'Space') {
            onNext();
          }
        }}
        {...restPageItemProps}
      >
        {typeof slots.next === 'string' ? <span>{slots.next}</span> : <slots.next />}
      </div>
    </div>
  );

  const itemPerPageContainer = (variant.toLowerCase() === 'withitemperpage' ||
    variant.toLowerCase() === 'both') && (
    <div
      className={[style.dropdownContainer, dropdownContainerClass, style[size.toLowerCase()]].join(
        ' '
      )}
    >
      <Dropdown
        options={sizeOptions}
        onChange={(option) => {
          handlePageSizeSelect(option);
        }}
        inputProps={{
          autoFocus: false,
          className: [style.dropdownInput, inputClass].join(' '),
          readOnly: true,
          value: `${selectedPageSize} / page`,
          placeholder: ''
        }}
        inputContainerProps={{ className: style.dropdownInputContainer }}
        containerProps={{ className: [style.dropdownWrapper, dropdownContainerClass].join(' ') }}
        optionContainerProps={{ className: style.dropdownOption }}
        dropdownItemClassName={style.pageSizeOption}
        value={{ id: selectedPageSize, label: `${selectedPageSize} / page` }}
      />
    </div>
  );

  const goToPageContainer = (variant.toLowerCase() === 'withpageselection' ||
    variant.toLowerCase() === 'both') && (
    <div className={style.pageSelectionContainer}>
      <Typography variant="b3-regular">Go to page</Typography>
      <input
        type="text"
        className={[style.inputContainer, style[size.toLowerCase()]].join(' ')}
        onChange={(event) => {
          handlePageChange(event.target.value);
        }}
        value={activePage}
        {...restInputProps}
      />
    </div>
  );

  return (
    <section
      className={[style.paginationContainer, style[alignment.toLowerCase()], containerClass].join(
        ' '
      )}
      {...restContainerProps}
    >
      {(() => {
        if (screenSize > SCREEN_SIZES.MOBILE && screenSize < SCREEN_SIZES.DESKTOP) {
          return (
            <div
              className={[
                style.paginationItemsContainer,
                disabled ? style.disabled : '',
                style[alignment.toLowerCase()],
                style[size.toLowerCase()]
              ].join(' ')}
            >
              {itemPerPageContainer}
              {goToPageContainer}
              {pagination}
            </div>
          );
        } else {
          return (
            <div
              className={[
                style.paginationItemsContainer,
                disabled ? style.disabled : '',
                style[alignment.toLowerCase()],
                style[size.toLowerCase()],
                containerClass
              ].join(' ')}
            >
              {itemPerPageContainer}
              {pagination}
              {goToPageContainer}
            </div>
          );
        }
      })()}
    </section>
  );
};

export default Pagination;
