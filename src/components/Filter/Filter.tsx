import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Filter.module.scss';
import CloseIcon from '../../icons/CloseIcon';
import FilterIcon from '../../icons/FilterIcon';
import SearchBar from '../SearchBar/SearchBar';
import { IFilter, IOpenFilterEventTriggers, IOption } from './IFilter';
import Loader from '../Loader/Loader';
import SegmentControl from '../SegmentControl/SegmentControl';
import { Typography } from '../Typography/Typography';
import RefreshIcon from '../../icons/RefreshIcon';
import Checkbox from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import Badge from '../Badge/Badge';
import { BLUE_400, BLUE_GREY_600, WHITE_500 } from '../../constants/colors';
import useOutsideClick from '../../hooks/useOutsideClick';

const Filter: React.FC<IFilter> = ({
  navOptions,
  filterOptions,
  appliedFilterOptions,
  TriggerElement,
  values = [],
  selectedNavOptionId,
  appliedFiltersCount = 0,
  position = 'BottomLeft',
  loading = false,
  error,
  isFilterOpen,
  triggerElementProps,
  className,
  resetButtonProps,
  applyButtonProps,
  checkboxIconProps,
  isBackdropCloseEnabled = false,
  handleIsFilterOpen,
  onSearch,
  onNavOptionChange,
  onApply,
  onReset,
  onRetry,
  renderBadgeContent,
  renderCheckbox
}) => {
  const { className: triggerElementClass, ...rest } = triggerElementProps ?? {};
  const { className: resetButtonClass, ...restResetButtonProps } = resetButtonProps ?? {};
  const { className: applyButtonClass, ...restApplyButtonProps } = applyButtonProps ?? {};

  const [isOpen, setIsOpen] = useState(false);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<IOption[]>([]);
  const [searchString, setSearchString] = useState('');

  const buttonContainerRef = useRef(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const filterContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSelectedFilters(values?.length ? [...values] : []);
  }, [values]);

  useEffect(() => {
    if (appliedFiltersCount) {
      setSelectedFilters((prevFilters) => {
        const slicedFilters = prevFilters?.slice(0, appliedFiltersCount) ?? [];
        return slicedFilters;
      });
    } else {
      setSelectedFilters([]);
    }
    setSearchString('');
    onSearch?.('');
  }, [isOpen, isFilterApplied, appliedFiltersCount, isFilterOpen]);

  useOutsideClick(containerRef, () => {
    if (isBackdropCloseEnabled) {
      if (isFilterOpen !== undefined) handleIsFilterOpen?.(false, 'onBackdropClick');
      else setIsOpen(false);
    }
  });

  const checkSelectedFilter = (option: IOption) => {
    return selectedFilters?.some((selectedItem) => option?.id === selectedItem?.id);
  };

  const checkedFilters = useMemo(() => {
    const checkedOptions = {};
    filterOptions.forEach((filterOption) => {
      checkedOptions[filterOption.id] = checkSelectedFilter(filterOption);
    });

    return checkedOptions;
  }, [selectedFilters, filterOptions]);

  const onClose = (
    filterCount?: number,
    eventTrigger: IOpenFilterEventTriggers = 'onCrossButtonClick'
  ) => {
    if (filterCount === 0) {
      setSelectedFilters([]);
    } else {
      if (appliedFilterOptions?.length) {
        setSelectedFilters(appliedFilterOptions);
      } else {
        setSelectedFilters((previousValue) => {
          return previousValue?.slice(0, filterCount);
        });
      }
    }
    onNavOptionChange?.(1);
    if (isFilterOpen !== undefined) handleIsFilterOpen?.(false, eventTrigger);
    else setIsOpen(false);
  };

  const onApplyFilter = () => {
    setIsFilterApplied((prev) => !prev);
    onApply?.(selectedFilters ?? []);
    onClose(selectedFilters?.length, 'onApply');
  };

  const toggleOverlay = () => {
    if (isFilterOpen !== undefined) handleIsFilterOpen?.(!isFilterOpen, 'onTriggerElement');
    else setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleFilterChange = (option: IOption) => {
    const isOptionPresent = checkSelectedFilter(option);
    const newFilters = isOptionPresent
      ? selectedFilters?.filter((selectedOption) => selectedOption.id !== option.id) ?? []
      : [...(selectedFilters ?? []), option];
    setSelectedFilters(newFilters);
  };

  const handleReset = () => {
    onReset ? onReset?.(values, appliedFilterOptions ?? []) : setSelectedFilters([]);
    if (isFilterOpen !== undefined) handleIsFilterOpen?.(!isFilterOpen, 'onReset');
  };

  return (
    <section className={[styles.container, className].join(' ')} ref={filterContainerRef}>
      <div className={styles.buttonContainer} ref={buttonContainerRef}>
        <Button
          type="button"
          variant="Outlined"
          className={[styles.triggerElement, triggerElementClass].join(' ')}
          onClick={toggleOverlay}
          aria-haspopup="true"
          aria-expanded={isOpen || isFilterOpen ? 'true' : 'false'}
          aria-controls="filter"
          {...rest}
        >
          {TriggerElement ? TriggerElement : <FilterIcon color={BLUE_400} />}
        </Button>
        {(!isOpen || !isFilterOpen) &&
          appliedFiltersCount > 0 &&
          (renderBadgeContent ? (
            renderBadgeContent(appliedFiltersCount)
          ) : (
            <Badge
              className={styles.badge}
              badgeContent={appliedFiltersCount.toString()}
              color={BLUE_400}
            />
          ))}
      </div>
      {(isOpen || isFilterOpen) && (
        <section
          ref={containerRef}
          className={[
            styles.filterContainer,
            styles[position.charAt(0).toLowerCase() + position.slice(1)]
          ].join(' ')}
        >
          <section className={styles.header}>
            <Typography variant="b1-bold">Filter</Typography>
            <div
              role="button"
              className={styles.close}
              onClick={() => onClose()}
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.code === 'Enter' || event.code === 'Space') {
                  if (isFilterOpen !== undefined) handleIsFilterOpen?.(false, 'onCrossButtonClick');
                  else setIsOpen(false);
                }
              }}
            >
              <CloseIcon />
            </div>
          </section>
          <section className={styles.body}>
            <div className={styles.leftContainer}>
              <SegmentControl
                tabs={navOptions}
                activeTabId={selectedNavOptionId ?? navOptions?.[0].id}
                onChange={(value) => {
                  setSearchString('');
                  onSearch?.('');
                  onNavOptionChange?.(value);
                }}
                className={styles.segmentContainer}
                activeClassName={styles.activeTab}
                tabButtonProps={{ container: { className: styles.tabButton } }}
                segmentsClassName={styles.segmentsClassName}
              />
            </div>
            <div className={[styles.rightContainer, loading ? styles.loading : ''].join(' ')}>
              <Loader
                show={loading}
                size="Large"
                variant="Circular"
                loaderColor={WHITE_500}
                loaderBgColor={BLUE_GREY_600}
              />
              {error && !loading && (
                <div className={styles.retryButtonContainer}>
                  <Typography className={styles.error} variant="b2-medium">
                    Could not load the data, Try Again!
                  </Typography>
                  <RefreshIcon className={styles.icon} onClick={onRetry} />
                </div>
              )}
              {!error && !loading && (
                <>
                  <div className={styles.searchWrapper}>
                    <SearchBar
                      onChange={(event) => {
                        setSearchString(event.target.value);
                        onSearch?.(event?.target.value);
                      }}
                      value={searchString}
                    />
                  </div>
                  <div className={styles.filters}>
                    {filterOptions &&
                      filterOptions?.map((filterOption) => (
                        <div className={styles.filter} key={`nav-option-${filterOption.id}`}>
                          {renderCheckbox ? (
                            renderCheckbox?.(`filterOption-${filterOption.id}`, filterOption)
                          ) : (
                            <Checkbox
                              id={`filterOption-${filterOption.id}`}
                              checked={checkedFilters[filterOption.id] ?? false}
                              onChange={() => handleFilterChange(filterOption)}
                              icons={checkboxIconProps}
                            />
                          )}
                          <label
                            htmlFor={`filterOption-${filterOption.id}`}
                            className={styles.label}
                            title={filterOption?.title}
                          >
                            {filterOption.title}
                          </label>
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          </section>
          <section className={styles.footer}>
            <Button
              type="button"
              className={[styles.button, resetButtonClass].join('')}
              variant="Secondary"
              onClick={handleReset}
              {...restResetButtonProps}
            >
              <Typography variant="b3-bold">Reset</Typography>
            </Button>
            <Button
              type="button"
              variant="Primary"
              className={[styles.button, applyButtonClass].join('')}
              onClick={onApplyFilter}
              {...restApplyButtonProps}
            >
              <Typography variant="b3-bold">Apply ({selectedFilters?.length ?? 0})</Typography>
            </Button>
          </section>
        </section>
      )}
    </section>
  );
};

export default Filter;
